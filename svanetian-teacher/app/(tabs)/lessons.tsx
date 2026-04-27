import { ScrollView, StyleSheet, View } from 'react-native';
import AppLogo from '@/components/AppLogo';
import LessonCard from '@/components/LessonCard';
import Screen from '@/components/Screen';
import { layout } from '@/constants/layout';

const lessons = [
  { title: 'გაკვეთილი 1', subtitle: 'სვანური ანბანი და პირველი სიტყვები' },
  { title: 'გაკვეთილი 2', subtitle: 'მისალმება და ყოველდღიური ფრაზები' },
  { title: 'გაკვეთილი 3', subtitle: 'ოჯახი, სახლი და გარემო' },
];

export default function LessonsScreen() {
  return (
    <Screen contentStyle={styles.container}>
      <View style={styles.logo}>
        <AppLogo compact />
      </View>
      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.title} title={lesson.title} subtitle={lesson.subtitle} />
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: layout.screen.bottomNavSpace,
  },
  logo: {
    marginBottom: layout.header.bottomGap,
  },
  list: {
    gap: layout.lessons.listGap,
    paddingBottom: layout.lessons.listBottomPadding,
  },
});
