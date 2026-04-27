import { Pressable, StyleSheet, Text } from 'react-native';
import { layout } from '@/constants/layout';
import { colors, pressed } from '@/constants/theme';
import type { Word } from '@/types/word';
import AppIcon from './AppIcon';

type WordCardProps = {
  item: Word;
  onPress: () => void;
};

export default function WordCard({ item, onPress }: WordCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed: isPressed }) => [styles.row, isPressed && styles.pressed]}
    >
      <Text style={styles.word}>{item.svan}</Text>
      <AppIcon name="arrowRight" size={layout.home.arrowIcon} />
      <Text style={styles.translation}>{item.translation}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.panel,
    borderRadius: layout.lexicon.rowRadius,
    paddingHorizontal: layout.lexicon.rowPaddingX,
    height: layout.lexicon.rowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: pressed.opacitySoft,
    transform: [{ scale: pressed.scaleSoft }],
  },
  word: {
    width: layout.lexicon.rowWordWidthPercent,
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: layout.lexicon.rowFont,
  },
  translation: {
    width: layout.lexicon.rowWordWidthPercent,
    textAlign: 'right',
    color: colors.textPrimary,
    fontWeight: '600',
    fontSize: layout.lexicon.rowFont,
  },
});
