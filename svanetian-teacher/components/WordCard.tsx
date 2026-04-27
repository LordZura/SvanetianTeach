import { Pressable, StyleSheet, Text } from 'react-native';
import { layout } from '@/constants/layout';
import { colors, radius } from '@/constants/theme';
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
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <Text style={styles.word}>{item.svan}</Text>
      <AppIcon name="arrowRight" size={20} />
      <Text style={styles.translation}>{item.translation}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.panel,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: layout.rowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.99 }],
  },
  word: {
    width: '40%',
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
  translation: {
    width: '40%',
    textAlign: 'right',
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});
