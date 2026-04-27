import { Image, ImageStyle, StyleProp, View, ViewStyle } from 'react-native';
import { layout } from '@/constants/layout';

type AppLogoProps = {
  size?: number;
  compact?: boolean;
  style?: StyleProp<ImageStyle | ViewStyle>;
};

export default function AppLogo({ size, compact = false, style }: AppLogoProps) {
  const resolvedSize = size ?? (compact ? layout.logo.header : layout.logo.auth);

  return (
    <View style={style}>
      <Image
        source={require('@/assets/ui/logo.png')}
        resizeMode="contain"
        style={{ width: resolvedSize, height: resolvedSize }}
      />
    </View>
  );
}
