import { StyleSheet, Text, View } from 'react-native';
import { layout } from '@/constants/layout';
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
    borderRadius: layout.lessons.cardRadius,
    paddingHorizontal: layout.lessons.cardPaddingX,
    paddingVertical: layout.lessons.cardPaddingY,
    gap: layout.lessons.cardGap,
  },
  title: {
    color: colors.textPrimary,
    fontSize: layout.lessons.titleFont,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: layout.lessons.subtitleFont,
  },
});
