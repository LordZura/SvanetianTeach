import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';
import { colors, pressed } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.hero}>
        <AppLogo size={layout.logo.home} />
        <Text style={styles.title}>{'მე შენ გასწავლი\nსვანურს'}</Text>
      </View>

      <Pressable
        onPress={() => router.push('/lexicon')}
        style={({ pressed: isPressed }) => [styles.searchPill, isPressed && styles.pressed]}
      >
        <Text style={styles.searchText}>დაწერე აქაური...</Text>
        <View style={styles.arrowWrap}>
          <AppIcon name="arrowRight" size={layout.home.arrowIcon} />
        </View>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingBottom: layout.screen.bottomNavSpace,
  },
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: layout.home.heroGap,
    marginTop: layout.home.heroTopGap,
  },
  title: {
    color: colors.textPrimary,
    fontSize: layout.home.titleFont,
    textAlign: 'center',
    lineHeight: layout.home.titleLineHeight,
    fontWeight: '700',
    maxWidth: layout.home.titleMaxWidth,
  },
  searchPill: {
    alignSelf: 'center',
    width: `${layout.home.searchWidthPercent * 100}%`,
    maxWidth: layout.home.searchMaxWidth,
    backgroundColor: colors.card,
    borderRadius: layout.inputs.radius,
    height: layout.home.searchHeight,
    paddingHorizontal: layout.home.searchPaddingX,
    marginBottom: layout.home.searchBottomGap,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressed: {
    opacity: pressed.opacitySoft,
    transform: [{ scale: pressed.scaleSoft }],
  },
  searchText: {
    flex: 1,
    color: colors.textMuted,
    fontSize: layout.home.searchTextFont,
  },
  arrowWrap: {
    width: layout.home.arrowWrap,
    height: layout.home.arrowWrap,
    borderRadius: layout.home.arrowWrap / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
