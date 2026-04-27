import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import WordCard from '@/components/WordCard';
import { theme } from '@/constants/theme';
import { MOCK_WORDS } from '@/types/word';

export default function LexiconScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <AppLogo compact />
          <View style={styles.searchIconWrap}>
            <Ionicons name="search-outline" size={23} color={theme.text} />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
          {MOCK_WORDS.map((item) => (
            <WordCard key={item.id} item={item} onPress={() => router.push(`/word/${item.id}`)} />
          ))}
        </ScrollView>

        <Text style={styles.upMarker}>⌃</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 128,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  searchIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.border,
  },
  list: {
    gap: 12,
    paddingBottom: 30,
  },
  upMarker: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    color: theme.text,
    fontSize: 18,
  },
});
