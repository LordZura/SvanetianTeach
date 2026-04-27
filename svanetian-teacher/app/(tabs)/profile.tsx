import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { theme } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logoWrap}>
          <AppLogo />
        </View>

        <View style={styles.choiceCard}>
          <AppButton title="რეგისტრაცია" compact onPress={() => router.push('/auth/register')} />
          <AppButton title="შესვლა" compact onPress={() => router.push('/auth/login')} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 140,
  },
  logoWrap: {
    marginBottom: 120,
  },
  choiceCard: {
    width: '80%',
    backgroundColor: theme.card,
    borderRadius: 36,
    paddingHorizontal: 18,
    paddingVertical: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
});
