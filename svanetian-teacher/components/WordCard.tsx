import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '@/constants/theme';
import type { Word } from '@/types/word';

type WordCardProps = {
  item: Word;
  onPress: () => void;
};

export default function WordCard({ item, onPress }: WordCardProps) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Text style={styles.word}>{item.svan}</Text>
      <View style={styles.middle}>
        <Ionicons name="arrow-forward" size={18} color={theme.text} />
      </View>
      <Text style={styles.translation}>{item.translation}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: theme.card,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
  },
  word: {
    flex: 1,
    color: theme.text,
    fontWeight: '600',
    fontSize: 13,
  },
  middle: {
    width: 32,
    alignItems: 'center',
  },
  translation: {
    flex: 1,
    textAlign: 'right',
    color: theme.text,
    fontWeight: '600',
    fontSize: 13,
  },
});
