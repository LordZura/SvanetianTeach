import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants/theme';

type LessonCardProps = {
  title: string;
  subtitle: string;
};

export default function LessonCard({ title, subtitle }: LessonCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.panel,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 8,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: 14,
  },
});
