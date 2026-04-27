import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { colors, radius } from '@/constants/theme';

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
        placeholderTextColor={placeholderTextColor ?? '#737882'}
      />
      {rightIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    minHeight: 40,
    backgroundColor: colors.input,
    borderRadius: radius.pill,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#2B2B31',
    fontSize: 14,
  },
});
