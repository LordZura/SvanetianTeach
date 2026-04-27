import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import AppButton from '@/components/AppButton';
import AppLogo from '@/components/AppLogo';
import Screen from '@/components/Screen';
import { layout, profileChoiceWidth } from '@/constants/layout';
import { colors } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.logoWrap}>
        <AppLogo size={layout.logo.auth} />
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
    paddingBottom: layout.screen.bottomNavSpace,
    paddingTop: layout.profile.topGap,
  },
  logoWrap: {
    marginTop: layout.profile.logoTopGap,
  },
  choiceCard: {
    width: profileChoiceWidth,
    backgroundColor: colors.panel,
    borderRadius: layout.profile.choiceRadius,
    paddingHorizontal: layout.profile.choicePaddingX,
    paddingVertical: layout.profile.choicePaddingY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: layout.profile.choiceGap,
  },
});
