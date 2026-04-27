import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLogo from '@/components/AppLogo';
import FormCard from '@/components/FormCard';
import Screen from '@/components/Screen';

export default function SubmitScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <AppLogo />
        <FormCard title="წარდგენა">
          <AppInput placeholder="სვანური სიტყვა" />
          <AppInput placeholder="თარგმანი" />
          <AppInput placeholder="მაგალითი" />
          <AppInput placeholder="დამატებითი შენიშვნა" />
          <View style={styles.buttonWrap}>
            <AppButton title="გაგზავნა" compact onPress={() => console.log('submit placeholder')} />
          </View>
        </FormCard>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 120,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingHorizontal: 20,
  },
  buttonWrap: {
    alignItems: 'center',
    marginTop: 8,
  },
});
