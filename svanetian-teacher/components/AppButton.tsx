import { Pressable, StyleSheet, Text } from 'react-native';
import { theme } from '@/constants/theme';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  compact?: boolean;
};

export default function AppButton({ title, onPress, compact = false }: AppButtonProps) {
  return (
    <Pressable style={[styles.button, compact && styles.compact]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.accent,
    borderRadius: 999,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compact: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  title: {
    color: theme.text,
    fontWeight: '700',
    fontSize: 16,
  },
});
