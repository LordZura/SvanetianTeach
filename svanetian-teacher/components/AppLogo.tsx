import { Image, ImageStyle, StyleProp, View, ViewStyle } from 'react-native';

type AppLogoProps = {
  size?: number;
  compact?: boolean;
  style?: StyleProp<ImageStyle | ViewStyle>;
};

export default function AppLogo({ size, compact = false, style }: AppLogoProps) {
  const resolvedSize = size ?? (compact ? 48 : 58);

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
