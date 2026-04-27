import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import AppIcon from '@/components/AppIcon';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import WordCard from '@/components/WordCard';
import { layout } from '@/constants/layout';
import { colors, pressed } from '@/constants/theme';
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
          style={({ pressed: isPressed }) => [styles.searchIconWrap, isPressed && styles.pressed]}
        >
          <AppIcon name="search" size={layout.header.searchIcon} />
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
    paddingTop: layout.header.topGap,
    paddingBottom: layout.screen.bottomNavSpace,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: layout.header.bottomGap,
    gap: layout.header.rowGap,
  },
  searchInputWrap: {
    flex: 1,
    maxWidth: layout.header.searchInputMaxWidth,
  },
  searchIconWrap: {
    width: layout.header.searchCircle,
    height: layout.header.searchCircle,
    borderRadius: layout.header.searchCircle / 2,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: layout.header.searchBorderWidth,
    borderColor: colors.border,
  },
  pressed: {
    opacity: pressed.opacitySoft,
    transform: [{ scale: pressed.scaleStrong }],
  },
  list: {
    gap: layout.lexicon.rowGap,
    paddingBottom: layout.lexicon.listBottomPadding,
  },
});
