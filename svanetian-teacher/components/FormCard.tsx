import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { layout } from '@/constants/layout';
import { colors, spacing } from '@/constants/theme';

type FormCardProps = {
  title: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function FormCard({ title, children, style }: FormCardProps) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: layout.authCardWidth,
    maxWidth: 330,
    borderRadius: 36,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    backgroundColor: colors.panel,
    gap: spacing.md,
    alignSelf: 'center',
  },
  title: {
    color: colors.text,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 27,
    marginBottom: spacing.xs,
  },
});
