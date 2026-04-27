import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { layout } from '@/constants/layout';
import { colors, pressed } from '@/constants/theme';

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
      style={({ pressed: isPressed }) => [
        styles.button,
        compact ? styles.compact : styles.normal,
        disabled && styles.disabled,
        isPressed && !disabled && styles.pressed,
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
    borderRadius: layout.buttons.radius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: layout.buttons.paddingX,
  },
  normal: {
    height: layout.buttons.normalHeight,
    minWidth: layout.buttons.normalMinWidth,
  },
  compact: {
    height: layout.buttons.compactHeight,
    minWidth: layout.buttons.compactMinWidth,
  },
  pressed: {
    opacity: pressed.opacityStrong,
    transform: [{ scale: pressed.scaleMedium }],
  },
  disabled: {
    opacity: 0.6,
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: layout.buttons.titleFont,
  },
  compactTitle: {
    fontSize: layout.buttons.compactTitleFont,
  },
});
