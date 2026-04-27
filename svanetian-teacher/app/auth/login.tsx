import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import FormCard from '@/components/FormCard';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';

export default function LoginScreen() {
  return (
    <Screen scroll keyboardAware contentStyle={styles.container}>
      <View style={styles.logoWrap}>
        <AppLogo size={layout.logo.auth} />
      </View>

      <FormCard title="შესვლა">
        <AppInput placeholder="ელფოსტა" keyboardType="email-address" autoCapitalize="none" />
        <AppInput placeholder="პაროლი" secureTextEntry />
        <AppInput placeholder="მობილური ნომერი" keyboardType="phone-pad" />
        <AppInput placeholder="ერთჯერადი კოდი" keyboardType="number-pad" />
        <View style={styles.buttonWrap}>
          <AppButton title="შესვლა" onPress={() => router.back()} compact />
        </View>
      </FormCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: layout.screen.paddingX,
    paddingVertical: layout.screen.formVerticalPadding,
  },
  logoWrap: {
    marginTop: layout.header.topGap,
  },
  buttonWrap: {
    marginTop: layout.forms.buttonTopGap,
    alignItems: 'center',
  },
});
