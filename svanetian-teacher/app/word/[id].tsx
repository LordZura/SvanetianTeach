import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/theme';
import { MOCK_WORDS } from '@/types/word';

export default function WordDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const word = MOCK_WORDS.find((item) => item.id === id);
  const activeWord = word ?? MOCK_WORDS[0];

  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.topRow}>
        <AppLogo compact />
        <Pressable onPress={() => console.log('search placeholder')} style={styles.iconBtn}>
          <AppIcon name="search" size={layout.header.searchIcon - 1} />
        </Pressable>
      </View>

      <View style={styles.card}>
        {!word && <Text style={styles.fallback}>სიტყვა ვერ მოიძებნა. ნაჩვენებია დემო ჩანაწერი.</Text>}

        <View style={styles.wordRow}>
          <Text style={styles.word}>{activeWord.svan}</Text>
          <View style={styles.verticalDivider} />
          <Text style={styles.translation}>{activeWord.translation}</Text>
        </View>

        <View style={styles.horizontalDivider} />
        <Text style={styles.desc}>{activeWord.description}</Text>
        <Text style={styles.bullets}>
          {activeWord.examples && activeWord.examples.length > 0
            ? `• ${activeWord.examples.join('\n• ')}`
            : '• ...\n• ...\n• ...\n• ...'}
        </Text>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>სიტყვის წარმოთქმა</Text>
          <Pressable onPress={() => console.log('mic placeholder', activeWord.id)} style={styles.micBtn}>
            <AppIcon name="mic" size={layout.detail.micIcon} />
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: layout.header.topGap,
    paddingBottom: layout.screen.formVerticalPadding,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: layout.header.bottomGap,
  },
  iconBtn: {
    width: layout.header.searchCircle,
    height: layout.header.searchCircle,
    borderRadius: layout.header.searchCircle / 2,
    backgroundColor: colors.accent,
    borderColor: colors.border,
    borderWidth: layout.header.searchBorderWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: colors.panel,
    borderRadius: layout.detail.cardRadius,
    paddingHorizontal: layout.detail.cardPaddingX,
    paddingVertical: layout.detail.cardPaddingY,
    minHeight: layout.detail.cardMinHeight,
  },
  fallback: {
    color: colors.textSecondary,
    fontSize: layout.detail.fallbackFont,
    marginBottom: layout.detail.fallbackBottomGap,
  },
  wordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: layout.detail.topRowHeight,
  },
  word: {
    flex: 1,
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
  verticalDivider: {
    width: layout.detail.dividerWidth,
    height: layout.detail.verticalDividerHeight,
    backgroundColor: colors.border,
    marginHorizontal: layout.detail.dividerGap,
  },
  translation: {
    flex: 1,
    color: colors.textPrimary,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 14,
  },
  horizontalDivider: {
    marginTop: layout.detail.horizontalDividerTop,
    marginBottom: layout.detail.horizontalDividerBottom,
    borderBottomWidth: layout.detail.dividerWidth,
    borderBottomColor: colors.border,
  },
  desc: {
    color: colors.textPrimary,
    fontSize: layout.detail.descFont,
    lineHeight: layout.detail.descLineHeight,
  },
  bullets: {
    color: colors.textPrimary,
    fontSize: layout.detail.bulletsFont,
    lineHeight: layout.detail.bulletsLineHeight,
    marginTop: layout.detail.bulletsTopGap,
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: colors.textPrimary,
    fontSize: layout.detail.footerFont,
  },
  micBtn: {
    width: layout.detail.micSize,
    height: layout.detail.micSize,
    borderRadius: layout.buttons.radius,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
});
