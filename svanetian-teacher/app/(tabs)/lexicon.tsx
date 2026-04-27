import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import WordCard from '@/components/WordCard';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/theme';
import { MOCK_WORDS } from '@/types/word';

export default function LexiconScreen() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredWords = useMemo(() => {
    if (!query.trim()) {
      return MOCK_WORDS;
    }

    const normalized = query.trim().toLowerCase();
    return MOCK_WORDS.filter((word) =>
      `${word.svan} ${word.georgian} ${word.translation}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.topRow}>
        <AppLogo compact />

        {searchOpen && (
          <AppInput
            value={query}
            onChangeText={setQuery}
            placeholder="მოძებნე სიტყვა"
            containerStyle={styles.searchInputWrap}
          />
        )}

        <Pressable
          onPress={() => setSearchOpen((prev) => !prev)}
          style={({ pressed }) => [styles.searchIconWrap, pressed && styles.pressed]}
        >
          <AppIcon name="search" size={20} />
        </Pressable>
      </View>

      <FlatList
        data={filteredWords}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <WordCard item={item} onPress={() => router.push(`/word/${item.id}`)} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: layout.horizontalPadding,
    paddingTop: 8,
    paddingBottom: layout.tabBarClearance,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 10,
  },
  searchInputWrap: {
    flex: 1,
    maxWidth: 250,
  },
  searchIconWrap: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.97 }],
  },
  list: {
    gap: 10,
    paddingBottom: 24,
  },
});
