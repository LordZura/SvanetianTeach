import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const layout = {
  screenWidth: width,
  screenHeight: height,

  screen: {
    paddingX: 20,
    paddingTop: 8,
    contentMaxWidth: 360,
    bottomNavSpace: 92,
    formVerticalPadding: 24,
  },

  logo: {
    home: 58,
    auth: 58,
    header: 48,
  },

  tabs: {
    widthPercent: 0.82,
    maxWidth: 390,
    height: 54,
    bottomInsetMin: 10,
    bottomInsetOffset: 8,
    activeCircle: 56,
    activeCircleBorderWidth: 2,
    activeLift: -20,
    icon: 21,
    iconActive: 23,
    chevronSize: 18,
    chevronGap: 6,
    iconWrap: 34,
  },

  header: {
    topGap: 8,
    rowGap: 10,
    bottomGap: 16,
    searchCircle: 50,
    searchIcon: 20,
    searchBorderWidth: 2,
    searchInputMaxWidth: 250,
  },

  home: {
    heroGap: 12,
    heroTopGap: 20,
    titleFont: 40,
    titleLineHeight: 48,
    titleMaxWidth: 300,
    searchWidthPercent: 0.96,
    searchMaxWidth: 360,
    searchHeight: 40,
    searchBottomGap: 10,
    searchPaddingX: 14,
    searchTextFont: 13,
    arrowWrap: 24,
    arrowIcon: 16,
  },

  forms: {
    cardWidthPercent: 0.78,
    cardMaxWidth: 330,
    cardRadius: 36,
    cardPaddingX: 20,
    cardPaddingY: 20,
    titleFont: 27,
    titleBottomGap: 6,
    inputHeight: 40,
    inputGap: 14,
    buttonTopGap: 10,
  },

  profile: {
    topGap: 32,
    logoTopGap: 26,
    choiceWidthPercent: 0.86,
    choiceMaxWidth: 360,
    choiceRadius: 34,
    choicePaddingX: 18,
    choicePaddingY: 18,
    choiceGap: 16,
  },

  lexicon: {
    rowHeight: 48,
    rowRadius: 14,
    rowPaddingX: 14,
    rowGap: 10,
    rowWordWidthPercent: '40%',
    rowFont: 13,
    listBottomPadding: 24,
  },

  detail: {
    cardHeightPercent: 0.64,
    cardMinHeight: 430,
    cardRadius: 24,
    cardPaddingX: 18,
    cardPaddingY: 16,
    topRowHeight: 46,
    dividerWidth: 2,
    verticalDividerHeight: 33,
    dividerGap: 10,
    horizontalDividerTop: 8,
    horizontalDividerBottom: 14,
    descFont: 15,
    descLineHeight: 23,
    bulletsFont: 18,
    bulletsLineHeight: 30,
    bulletsTopGap: 8,
    footerFont: 13,
    micSize: 38,
    micIcon: 15,
    fallbackFont: 12,
    fallbackBottomGap: 6,
  },

  lessons: {
    listGap: 12,
    listBottomPadding: 20,
    cardRadius: 20,
    cardPaddingX: 16,
    cardPaddingY: 18,
    cardGap: 8,
    titleFont: 18,
    subtitleFont: 14,
  },

  buttons: {
    normalHeight: 48,
    normalMinWidth: 132,
    compactHeight: 40,
    compactMinWidth: 110,
    radius: 999,
    paddingX: 20,
    titleFont: 16,
    compactTitleFont: 14,
  },

  inputs: {
    height: 40,
    radius: 999,
    paddingX: 14,
    iconGap: 8,
    font: 14,
  },
} as const;

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const tabBarWidth = Math.min(
  layout.screenWidth * layout.tabs.widthPercent,
  layout.tabs.maxWidth,
);

export const formCardWidth = Math.min(
  layout.screenWidth * layout.forms.cardWidthPercent,
  layout.forms.cardMaxWidth,
);

export const profileChoiceWidth = Math.min(
  layout.screenWidth * layout.profile.choiceWidthPercent,
  layout.profile.choiceMaxWidth,
);
