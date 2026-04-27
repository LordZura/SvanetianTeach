import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '@/components/Screen';
import AppLogo from '@/components/AppLogo';
import { theme } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.hero}>
          <AppLogo />
          <Text style={styles.title}>მე შენ ქართველო სწავლერს</Text>
        </View>

        <View style={styles.searchPill}>
          <Text style={styles.searchText}>დაწერე აქაური...</Text>
          <View style={styles.arrowBtn}>
            <Ionicons name="arrow-forward" size={16} color={theme.nav} />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 140,
    justifyContent: 'space-between',
  },
  hero: {
    marginTop: '36%',
    alignItems: 'center',
    gap: 14,
  },
  title: {
    color: theme.text,
    fontSize: 34,
    textAlign: 'center',
    lineHeight: 42,
    fontWeight: '600',
    maxWidth: 260,
  },
  searchPill: {
    marginBottom: 20,
    backgroundColor: theme.card,
    borderRadius: 999,
    height: 38,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    flex: 1,
    color: '#9EA4B0',
    fontSize: 13,
  },
  arrowBtn: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#6A6F79',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
