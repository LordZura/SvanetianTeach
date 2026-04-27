import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { colors, radius } from '@/constants/theme';

type AppButtonProps = {
  title: string;
  onPress?: () => void;
  compact?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
};

export default function AppButton({
  title,
  onPress,
  compact = false,
  style,
  textStyle,
  disabled = false,
}: AppButtonProps) {
  return (
    <Pressable
      hitSlop={8}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        compact ? styles.compact : styles.normal,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.title, compact && styles.compactTitle, textStyle]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  normal: {
    height: 48,
    minWidth: 132,
  },
  compact: {
    height: 40,
    minWidth: 110,
  },
  pressed: {
    opacity: 0.86,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.6,
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  compactTitle: {
    fontSize: 14,
  },
});
