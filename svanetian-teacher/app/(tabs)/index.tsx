import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';
import { colors, radius } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.hero}>
        <AppLogo size={58} />
        <Text style={styles.title}>{'მე შენ გასწავლი\nსვანურს'}</Text>
      </View>

      <Pressable
        onPress={() => router.push('/lexicon')}
        style={({ pressed }) => [styles.searchPill, pressed && styles.pressed]}
      >
        <Text style={styles.searchText}>დაწერე აქაური...</Text>
        <View style={styles.arrowWrap}>
          <AppIcon name="arrowRight" size={16} />
        </View>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.horizontalPadding,
    justifyContent: 'space-between',
    paddingBottom: layout.tabBarClearance,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    marginTop: 20,
  },
  title: {
    color: colors.text,
    fontSize: 40,
    textAlign: 'center',
    lineHeight: 48,
    fontWeight: '700',
    maxWidth: 300,
  },
  searchPill: {
    alignSelf: 'center',
    width: '96%',
    maxWidth: 360,
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    height: 40,
    paddingHorizontal: 14,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  searchText: {
    flex: 1,
    color: '#9EA4B0',
    fontSize: 13,
  },
  arrowWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
