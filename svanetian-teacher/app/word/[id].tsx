import { useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';
import { colors, radius } from '@/constants/theme';
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
          <AppIcon name="search" size={19} />
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
            <AppIcon name="mic" size={15} />
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.horizontalPadding,
    paddingTop: 8,
    paddingBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent,
    borderColor: colors.border,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: colors.panel,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 16,
    minHeight: 430,
  },
  fallback: {
    color: colors.mutedText,
    fontSize: 12,
    marginBottom: 6,
  },
  wordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 46,
  },
  word: {
    flex: 1,
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
  verticalDivider: {
    width: 2,
    height: 33,
    backgroundColor: colors.border,
    marginHorizontal: 10,
  },
  translation: {
    flex: 1,
    color: colors.text,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 14,
  },
  horizontalDivider: {
    marginTop: 8,
    marginBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
  },
  desc: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 23,
  },
  bullets: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 30,
    marginTop: 8,
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: colors.text,
    fontSize: 13,
  },
  micBtn: {
    width: 38,
    height: 38,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
});
