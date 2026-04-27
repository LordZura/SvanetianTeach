import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/constants/theme';

const iconMap = {
  lexicon: 'book-outline',
  index: 'chatbubble-outline',
  profile: 'person-outline',
  lessons: 'reader-outline',
  submit: 'create-outline',
} as const;

type IconName = keyof typeof iconMap;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabItem,
        tabBarIcon: ({ focused }) => {
          const key = route.name as IconName;
          const icon = iconMap[key] ?? 'ellipse-outline';
          return (
            <View style={[styles.iconWrap, focused && styles.iconWrapFocused]}>
              <Ionicons
                name={icon}
                size={22}
                color={focused ? theme.text : '#B7C4D2'}
              />
            </View>
          );
        },
        tabBarBackground: () => (
          <View style={styles.backgroundExtra}>
            <Text style={styles.chevron}>⌄</Text>
          </View>
        ),
      })}
    >
      <Tabs.Screen name="lexicon" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen
        name="lessons"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="submit"
        options={{ href: null }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 42,
    height: 52,
    borderRadius: 999,
    backgroundColor: theme.nav,
    borderTopWidth: 0,
    elevation: 0,
  },
  tabItem: {
    marginTop: 2,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapFocused: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginTop: -18,
    backgroundColor: theme.accent,
    borderColor: '#D8DEE8',
    borderWidth: 2,
  },
  backgroundExtra: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chevron: {
    position: 'absolute',
    bottom: -22,
    fontSize: 28,
    color: theme.text,
    opacity: 0.9,
  },
});
