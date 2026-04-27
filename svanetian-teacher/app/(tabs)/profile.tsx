import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';
import { colors, radius } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.logoWrap}>
        <AppLogo size={58} />
      </View>

      <View style={styles.choiceCard}>
        <AppButton title="რეგისტრაცია" compact onPress={() => router.push('/auth/register')} />
        <AppButton title="შესვლა" compact onPress={() => router.push('/auth/login')} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: layout.tabBarClearance,
    paddingTop: 32,
  },
  logoWrap: {
    marginTop: 26,
  },
  choiceCard: {
    width: Math.min(layout.screenWidth * 0.86, 360),
    backgroundColor: colors.panel,
    borderRadius: radius.xl,
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 0,
  },
});
