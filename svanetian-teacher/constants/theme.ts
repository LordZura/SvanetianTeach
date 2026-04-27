export const colors = {
  background: '#2B2B31',
  panel: '#555A63',
  card: '#50555E',
  nav: '#2F4A63',
  accent: '#E7472E',
  text: '#F6F7FB',
  mutedText: '#C8CCD4',
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

export const theme = {
  colors,
  spacing,
  radius,
} as const;
