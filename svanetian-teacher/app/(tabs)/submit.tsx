import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import FormCard from '@/components/FormCard';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';

export default function SubmitScreen() {
  return (
    <Screen scroll keyboardAware contentStyle={styles.container}>
      <AppLogo size={layout.logo.auth} />
      <FormCard title="წარდგენა">
        <AppInput placeholder="სვანური სიტყვა" />
        <AppInput placeholder="თარგმანი" />
        <AppInput placeholder="აღწერა" />
        <AppInput placeholder="მაგალითი" />
        <View style={styles.buttonWrap}>
          <AppButton title="გაგზავნა" compact onPress={() => console.log('submit placeholder')} />
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
  buttonWrap: {
    alignItems: 'center',
    marginTop: layout.forms.buttonTopGap,
  },
});
