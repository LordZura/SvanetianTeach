import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, ImageStyle, StyleProp } from 'react-native';
import { colors, pressed } from '@/constants/theme';

type AppIconName =
  | 'book'
  | 'chat'
  | 'profile'
  | 'search'
  | 'mic'
  | 'arrowRight'
  | 'chevronDown';

type AppIconProps = {
  name: AppIconName;
  size?: number;
  active?: boolean;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
};

const iconSources = {
  book: require('@/assets/ui/nav-book.png'),
  chat: require('@/assets/ui/nav-chat.png'),
  profile: require('@/assets/ui/nav-profile.png'),
  search: require('@/assets/ui/search.png'),
  mic: require('@/assets/ui/mic.png'),
  arrowRight: require('@/assets/ui/arrow-right.png'),
  chevronDown: require('@/assets/ui/chevron-down.png'),
} as const;

const fallbackName: Record<AppIconName, React.ComponentProps<typeof Ionicons>['name']> = {
  book: 'book-outline',
  chat: 'chatbubble-outline',
  profile: 'person-outline',
  search: 'search-outline',
  mic: 'mic-outline',
  arrowRight: 'arrow-forward',
  chevronDown: 'chevron-down',
};

export default function AppIcon({
  name,
  size = 20,
  active,
  tintColor,
  style,
}: AppIconProps) {
  const source = iconSources[name];

  if (!source) {
    if (name === 'chevronDown') {
      return (
        <MaterialIcons
          name="keyboard-arrow-down"
          size={size}
          color={tintColor ?? colors.textPrimary}
          style={style}
        />
      );
    }

    return (
      <Ionicons
        name={fallbackName[name]}
        size={size}
        color={tintColor ?? (active ? colors.textPrimary : colors.textSecondary)}
        style={style}
      />
    );
  }

  return (
    <Image
      source={source}
      resizeMode="contain"
      style={[
        {
          width: size,
          height: size,
          tintColor,
          opacity: active ? 1 : pressed.opacitySoft,
        },
        style,
      ]}
    />
  );
}
