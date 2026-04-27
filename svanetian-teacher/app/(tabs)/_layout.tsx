import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppIcon from '@/components/AppIcon';
import { layout, tabBarWidth } from '@/constants/layout';
import { colors, pressed } from '@/constants/theme';

const tabIconMap = {
  lexicon: 'book',
  index: 'chat',
  profile: 'profile',
} as const;

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const bottom = Math.max(layout.tabs.bottomInsetMin, insets.bottom + layout.tabs.bottomInsetOffset);

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
              style={({ pressed: isPressed }) => [styles.tabItem, isPressed && styles.tabPressed]}
            >
              <View style={[styles.iconWrap, focused && styles.iconWrapFocused]}>
                <AppIcon
                  name={tabIconMap[key]}
                  size={focused ? layout.tabs.iconActive : layout.tabs.icon}
                  active={focused}
                  tintColor={focused ? undefined : colors.textSecondary}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
      <AppIcon
        name="chevronDown"
        size={layout.tabs.chevronSize}
        tintColor={colors.textPrimary}
        style={styles.chevron}
      />
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
    width: tabBarWidth,
    height: layout.tabs.height,
    borderRadius: layout.buttons.radius,
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
    opacity: pressed.opacityMedium,
    transform: [{ scale: pressed.scaleMedium }],
  },
  iconWrap: {
    width: layout.tabs.iconWrap,
    height: layout.tabs.iconWrap,
    borderRadius: layout.tabs.iconWrap / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapFocused: {
    width: layout.tabs.activeCircle,
    height: layout.tabs.activeCircle,
    borderRadius: layout.tabs.activeCircle / 2,
    marginTop: layout.tabs.activeLift,
    backgroundColor: colors.accent,
    borderWidth: layout.tabs.activeCircleBorderWidth,
    borderColor: colors.border,
  },
  chevron: {
    marginTop: layout.tabs.chevronGap,
    opacity: 0.95,
  },
});
