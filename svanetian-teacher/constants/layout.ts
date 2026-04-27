import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const layout = {
  screenWidth: width,
  screenHeight: height,
  horizontalPadding: 20,
  contentMaxWidth: 360,
  authCardWidth: Math.min(width * 0.78, 330),
  tabBarHeight: 54,
  tabBarWidth: Math.min(width * 0.82, 390),
  tabBarClearance: 92,
  rowHeight: 48,
} as const;

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
