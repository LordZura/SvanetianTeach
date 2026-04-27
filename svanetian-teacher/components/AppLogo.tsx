import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/constants/theme';

type AppLogoProps = {
  compact?: boolean;
};

export default function AppLogo({ compact = false }: AppLogoProps) {
  return (
    <View style={[styles.container, compact && styles.compactContainer]}>
      <MaterialCommunityIcons
        name="castle"
        size={compact ? 34 : 46}
        color={theme.accent}
      />
      {!compact && <Text style={styles.badge}>SV</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactContainer: {
    alignItems: 'flex-start',
  },
  badge: {
    marginTop: -7,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
    color: theme.accent,
  },
});
