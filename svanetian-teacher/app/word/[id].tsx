import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { theme } from '@/constants/theme';
import { MOCK_WORDS } from '@/types/word';

export default function WordDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const word = MOCK_WORDS.find((item) => item.id === id) ?? MOCK_WORDS[0];

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <AppLogo compact />
          <View style={styles.iconBtn}>
            <Ionicons name="search-outline" size={20} color={theme.text} />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.wordRow}>
            <Text style={styles.word}>{word.svan}</Text>
            <View style={styles.verticalDivider} />
            <Text style={styles.translation}>{word.translation}</Text>
          </View>

          <View style={styles.horizontalDivider} />
          <Text style={styles.desc}>სიტყვის აღწერა, მნიშვნელობა, მაგალითები.</Text>
          <Text style={styles.bullets}>·{"\n"}·{"\n"}·{"\n"}·{"\n"}·</Text>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>სიტყვის წარმოთქმა</Text>
            <View style={styles.micBtn}>
              <Ionicons name="mic-outline" size={16} color={theme.text} />
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 120,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: theme.accent,
    borderColor: theme.border,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: theme.card,
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  wordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  word: {
    flex: 1,
    color: theme.text,
    fontWeight: '700',
    fontSize: 15,
  },
  verticalDivider: {
    width: 1,
    height: 32,
    backgroundColor: theme.border,
  },
  translation: {
    flex: 1,
    color: theme.text,
    textAlign: 'right',
    fontWeight: '700',
    fontSize: 15,
  },
  horizontalDivider: {
    marginTop: 8,
    marginBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: theme.border,
  },
  desc: {
    color: theme.text,
    fontSize: 16,
  },
  bullets: {
    color: theme.text,
    fontSize: 20,
    lineHeight: 28,
    marginTop: 8,
    flex: 1,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: theme.text,
    fontSize: 13,
  },
  micBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.accent,
  },
});
