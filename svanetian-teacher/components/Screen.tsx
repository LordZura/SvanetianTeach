import { ReactNode } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { layout } from '@/constants/layout';
import { colors } from '@/constants/theme';

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  scroll?: boolean;
  keyboardAware?: boolean;
};

export default function Screen({
  children,
  style,
  contentStyle,
  scroll = false,
  keyboardAware = false,
}: ScreenProps) {
  const body = scroll ? (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.scrollContent, contentStyle]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, contentStyle]}>{children}</View>
  );

  return (
    <SafeAreaView edges={['top', 'bottom']} style={[styles.container, style]}>
      {keyboardAware ? (
        <KeyboardAvoidingView
          style={styles.keyboardWrap}
          behavior={Platform.select({ ios: 'padding', android: undefined })}
        >
          {body}
        </KeyboardAvoidingView>
      ) : (
        body
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardWrap: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: layout.screen.paddingX,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: layout.screen.paddingX,
  },
});
