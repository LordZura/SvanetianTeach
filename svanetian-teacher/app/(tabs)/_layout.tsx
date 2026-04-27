import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { layout } from '@/constants/layout';
import { colors, radius } from '@/constants/theme';
import AppIcon from '@/components/AppIcon';

const tabIconMap = {
  lexicon: 'book',
  index: 'chat',
  profile: 'profile',
} as const;

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(10, insets.bottom + 8);

  return (
    <View pointerEvents="box-none" style={[styles.outer, { bottom }]}> 
      <View style={styles.pill}>
        {state.routes.map((route, index) => {
          const key = route.name as keyof typeof tabIconMap;

          if (!tabIconMap[key]) {
            return null;
          }

          const focused = state.index === index;
          const { options } = descriptors[route.key];

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              hitSlop={8}
              style={({ pressed }) => [styles.tabItem, pressed && styles.tabPressed]}
            >
              <View style={[styles.iconWrap, focused && styles.iconWrapFocused]}>
                <AppIcon
                  name={tabIconMap[key]}
                  size={focused ? 23 : 21}
                  active={focused}
                  tintColor={focused ? undefined : colors.mutedText}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
      <AppIcon name="chevronDown" size={18} tintColor={colors.text} style={styles.chevron} />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen name="lexicon" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="lessons" options={{ href: null }} />
      <Tabs.Screen name="submit" options={{ href: null }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  outer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  pill: {
    width: layout.tabBarWidth,
    height: layout.tabBarHeight,
    borderRadius: radius.pill,
    backgroundColor: colors.nav,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'visible',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
  },
  tabPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapFocused: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginTop: -20,
    backgroundColor: colors.accent,
    borderWidth: 2,
    borderColor: colors.border,
  },
  chevron: {
    marginTop: 6,
    opacity: 0.95,
  },
});
