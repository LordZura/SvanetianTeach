import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import FormCard from '@/components/FormCard';
import Screen from '@/components/Screen';

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppLogo />
        <FormCard title="შესვლა">
          <AppInput placeholder="ელფოსტა" keyboardType="email-address" />
          <AppInput placeholder="პაროლი" secureTextEntry />
          <AppInput placeholder="საიდენტიფიკაციო კოდი" />
          <AppInput placeholder="მობილური ნომერი" keyboardType="phone-pad" />
          <View style={styles.buttonWrap}>
            <AppButton title="შესვლა" compact onPress={() => router.back()} />
          </View>
        </FormCard>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 24,
  },
  buttonWrap: {
    marginTop: 8,
    alignItems: 'center',
  },
});
