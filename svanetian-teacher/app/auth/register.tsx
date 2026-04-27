import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import FormCard from '@/components/FormCard';
import Screen from '@/components/Screen';

export default function RegisterScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppLogo />
        <FormCard title="რეგისტრაცია">
          <AppInput placeholder="სახელი" />
          <AppInput placeholder="ელფოსტა" keyboardType="email-address" />
          <AppInput placeholder="პაროლი" secureTextEntry />
          <AppInput placeholder="გაიმეორე პაროლი" secureTextEntry />
          <View style={styles.buttonWrap}>
            <AppButton title="რეგისტრაცია" compact onPress={() => router.back()} />
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
