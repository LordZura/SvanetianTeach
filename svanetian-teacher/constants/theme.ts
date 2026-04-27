export const colors = {
  background: '#2B2B31',
  panel: '#555A63',
  card: '#50555E',
  nav: '#2F4A63',
  accent: '#E7472E',
  textPrimary: '#F6F7FB',
  textSecondary: '#C8CCD4',
  textMuted: '#9EA4B0',
  textInput: '#2B2B31',
  input: '#D5D6DA',
  border: '#E8EAF1',
  dim: '#8A909C',
} as const;

export const spacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  xxl: 36,
} as const;

export const radius = {
  sm: 10,
  md: 14,
  lg: 22,
  xl: 34,
  pill: 999,
} as const;

export const pressed = {
  opacitySoft: 0.9,
  opacityMedium: 0.88,
  opacityStrong: 0.84,
  scaleSoft: 0.99,
  scaleMedium: 0.98,
  scaleStrong: 0.97,
} as const;

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },
} as const;

export const theme = {
  colors,
  spacing,
  radius,
  pressed,
  shadows,
} as const;
