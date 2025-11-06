/**
 * BASE TOKENS - Static Design Tokens
 *
 * ✅ SINGLE SOURCE OF TRUTH for all static design tokens
 * ✅ These tokens don't change with theme (light/dark)
 * ✅ Used by TokenFactory to create complete DesignTokens
 * ✅ Material Design 3 compliant
 *
 * @module BaseTokens
 */

import { TextStyle, ViewStyle } from 'react-native';

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type Spacing = {
  // Base Spacing Scale
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;

  // Semantic Spacing
  screenPadding: number;
  cardPadding: number;
  buttonPadding: number;
  inputPadding: number;
  sectionSpacing: number;

  // Icon Sizes
  iconSizeSmall: number;
  iconSizeMedium: number;
  iconSizeLarge: number;
  iconSizeXLarge: number;
  iconSizeHero: number;

  // Component Heights
  buttonHeight: number;
  inputHeight: number;
  appBarHeight: number;
  tabBarHeight: number;
};

export type Typography = {
  displayLarge: TextStyle;
  displayMedium: TextStyle;
  displaySmall: TextStyle;
  headlineLarge: TextStyle;
  headlineMedium: TextStyle;
  headlineSmall: TextStyle;
  titleLarge: TextStyle;
  titleMedium: TextStyle;
  titleSmall: TextStyle;
  bodyLarge: TextStyle;
  bodyMedium: TextStyle;
  bodySmall: TextStyle;
  labelLarge: TextStyle;
  labelMedium: TextStyle;
  labelSmall: TextStyle;
  button: TextStyle;
  caption: TextStyle;
  overline: TextStyle;
  // Legacy compatibility
  headingLarge: TextStyle;
  headingMedium: TextStyle;
  headingSmall: TextStyle;
  // Font weight helpers (for inline fontWeight usage)
  semibold: '600';
  medium: '500';
  bold: '700';
};

export type Borders = {
  radius: {
    none: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    full: number;
  };
  width: {
    none: number;
    thin: number;
    medium: number;
    thick: number;
  };
  button: ViewStyle;
  card: ViewStyle;
  input: ViewStyle;
  pill: ViewStyle;
};

export type IconSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  hero: number;
};

export type Opacity = {
  disabled: number;
  inactive: number;
  subtle: number;
  medium: number;
  full: number;
};

export type AvatarSizes = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type BaseTokens = {
  spacing: Spacing;
  typography: Typography;
  borders: Borders;
  iconSizes: IconSizes;
  opacity: Opacity;
  avatarSizes: AvatarSizes;
};

// =============================================================================
// BASE TOKENS IMPLEMENTATION
// =============================================================================

/**
 * BASE_TOKENS - Static design tokens
 * These values don't change with theme (light/dark)
 */
export const BASE_TOKENS: BaseTokens = {
  spacing: {
    // Base Spacing Scale (4px base unit)
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,

    // Semantic Spacing
    screenPadding: 20,
    cardPadding: 16,
    buttonPadding: 16,
    inputPadding: 12,
    sectionSpacing: 24,

    // Icon Sizes
    iconSizeSmall: 16,
    iconSizeMedium: 20,
    iconSizeLarge: 24,
    iconSizeXLarge: 32,
    iconSizeHero: 64,

    // Component Heights
    buttonHeight: 48,
    inputHeight: 48,
    appBarHeight: 56,
    tabBarHeight: 60,
  },

  typography: {
    displayLarge: {
      fontSize: 57,
      fontWeight: '400',
      lineHeight: 64,
      letterSpacing: -0.25,
    } as TextStyle,
    displayMedium: {
      fontSize: 45,
      fontWeight: '400',
      lineHeight: 52,
      letterSpacing: 0,
    } as TextStyle,
    displaySmall: {
      fontSize: 36,
      fontWeight: '400',
      lineHeight: 44,
      letterSpacing: 0,
    } as TextStyle,
    headlineLarge: {
      fontSize: 32,
      fontWeight: '400',
      lineHeight: 40,
      letterSpacing: 0,
    } as TextStyle,
    headlineMedium: {
      fontSize: 28,
      fontWeight: '400',
      lineHeight: 36,
      letterSpacing: 0,
    } as TextStyle,
    headlineSmall: {
      fontSize: 24,
      fontWeight: '400',
      lineHeight: 32,
      letterSpacing: 0,
    } as TextStyle,
    titleLarge: {
      fontSize: 22,
      fontWeight: '500',
      lineHeight: 28,
      letterSpacing: 0,
    } as TextStyle,
    titleMedium: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
      letterSpacing: 0.15,
    } as TextStyle,
    titleSmall: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      letterSpacing: 0.1,
    } as TextStyle,
    bodyLarge: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
      letterSpacing: 0.5,
    } as TextStyle,
    bodyMedium: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
      letterSpacing: 0.25,
    } as TextStyle,
    bodySmall: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      letterSpacing: 0.4,
    } as TextStyle,
    labelLarge: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      letterSpacing: 0.1,
    } as TextStyle,
    labelMedium: {
      fontSize: 12,
      fontWeight: '500',
      lineHeight: 16,
      letterSpacing: 0.5,
    } as TextStyle,
    labelSmall: {
      fontSize: 11,
      fontWeight: '500',
      lineHeight: 16,
      letterSpacing: 0.5,
    } as TextStyle,
    button: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
      letterSpacing: 0.1,
    } as TextStyle,
    caption: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 16,
      letterSpacing: 0.4,
    } as TextStyle,
    overline: {
      fontSize: 10,
      fontWeight: '500',
      lineHeight: 16,
      letterSpacing: 1.5,
      textTransform: 'uppercase',
    } as TextStyle,
      // Legacy compatibility aliases
    headingLarge: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
      letterSpacing: 0,
    } as TextStyle,
    headingMedium: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
      letterSpacing: 0,
    } as TextStyle,
    headingSmall: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
      letterSpacing: 0,
    } as TextStyle,
    // Font weight helpers (for inline fontWeight usage)
    semibold: '600' as const,
    medium: '500' as const,
    bold: '700' as const,
  },

  borders: {
    radius: {
      none: 0,
      xs: 2,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      xxl: 24,
      full: 9999,
    },
    width: {
      none: 0,
      thin: 1,
      medium: 2,
      thick: 4,
    },
    button: {
      borderRadius: 12,
      borderWidth: 0,
    } as ViewStyle,
    card: {
      borderRadius: 16,
      borderWidth: 1,
    } as ViewStyle,
    input: {
      borderRadius: 8,
      borderWidth: 1,
    } as ViewStyle,
    pill: {
      borderRadius: 9999,
      borderWidth: 0,
    } as ViewStyle,
  },

  iconSizes: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 48,
    hero: 64,
  },

  opacity: {
    disabled: 0.6,
    inactive: 0.7,
    subtle: 0.8,
    medium: 0.9,
    full: 1.0,
  },

  avatarSizes: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    xxl: 80,
  },
};

// =============================================================================
// CONVENIENCE EXPORTS
// =============================================================================

export const spacing = BASE_TOKENS.spacing;
export const typography = BASE_TOKENS.typography;
export const borders = BASE_TOKENS.borders;

// STATIC_TOKENS is an alias for BASE_TOKENS (backward compatibility)
export const STATIC_TOKENS = BASE_TOKENS;

