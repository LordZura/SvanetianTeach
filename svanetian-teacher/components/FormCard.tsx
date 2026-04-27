import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/constants/theme';

type FormCardProps = {
  title: string;
  children: ReactNode;
};

export default function FormCard({ title, children }: FormCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 320,
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: theme.card,
    gap: 14,
  },
  title: {
    color: theme.text,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 26,
    marginBottom: 8,
  },
});
