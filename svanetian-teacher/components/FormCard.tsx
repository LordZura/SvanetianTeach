import { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { formCardWidth, layout } from '@/constants/layout';
import { colors } from '@/constants/theme';

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
    width: formCardWidth,
    maxWidth: layout.forms.cardMaxWidth,
    borderRadius: layout.forms.cardRadius,
    paddingHorizontal: layout.forms.cardPaddingX,
    paddingVertical: layout.forms.cardPaddingY,
    backgroundColor: colors.panel,
    gap: layout.forms.inputGap,
    alignSelf: 'center',
  },
  title: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: layout.forms.titleFont,
    marginBottom: layout.forms.titleBottomGap,
  },
});
