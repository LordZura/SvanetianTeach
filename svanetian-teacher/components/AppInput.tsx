import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/theme';

type AppInputProps = TextInputProps & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function AppInput({
  leftIcon,
  rightIcon,
  containerStyle,
  style,
  placeholderTextColor,
  ...props
}: AppInputProps) {
  return (
    <View style={[styles.wrap, containerStyle]}>
      {leftIcon}
      <TextInput
        {...props}
        style={[styles.input, style]}
        placeholderTextColor={placeholderTextColor ?? colors.dim}
      />
      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    minHeight: layout.inputs.height,
    backgroundColor: colors.input,
    borderRadius: layout.inputs.radius,
    paddingHorizontal: layout.inputs.paddingX,
    flexDirection: 'row',
    alignItems: 'center',
    gap: layout.inputs.iconGap,
  },
  input: {
    flex: 1,
    height: layout.inputs.height,
    color: colors.textInput,
    fontSize: layout.inputs.font,
  },
});
