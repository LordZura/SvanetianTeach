import { ScrollView, StyleSheet, View } from 'react-native';
import AppLogo from '@/components/AppLogo';
import LessonCard from '@/components/LessonCard';
import Screen from '@/components/Screen';

const lessons = [
  { title: 'გაკვეთილი 1', subtitle: 'სვანური ანბანი და პირველი სიტყვები' },
  { title: 'გაკვეთილი 2', subtitle: 'მისალმება და ყოველდღიური ფრაზები' },
  { title: 'გაკვეთილი 3', subtitle: 'ოჯახი, სახლი და გარემო' },
];

export default function LessonsScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.logo}>
          <AppLogo compact />
        </View>
        <ScrollView contentContainerStyle={styles.list}>
          {lessons.map((lesson) => (
            <LessonCard key={lesson.title} title={lesson.title} subtitle={lesson.subtitle} />
          ))}
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 120,
  },
  logo: {
    marginBottom: 20,
  },
  list: {
    gap: 14,
  },
});
