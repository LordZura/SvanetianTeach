import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { theme } from '@/constants/theme';

export default function AppInput(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#70737A"
      {...props}
      style={[styles.input, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.input,
    borderRadius: 999,
    height: 38,
    paddingHorizontal: 16,
    color: '#2B2B31',
    fontSize: 14,
  },
});
