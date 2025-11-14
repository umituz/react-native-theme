/**
 * useThemedStyles Hook
 * Helper hook for creating StyleSheets with theme support
 *
 * ✅ KISS: Single hook with optional StyleSheet creation
 * ✅ DRY: Shared theme access logic
 * ✅ SOLID: Single Responsibility - only handles themed styles
 *
 * Usage:
 * ```typescript
 * const createStyles = (theme: Theme) => ({
 *   container: {
 *     backgroundColor: theme.colors.backgroundPrimary,
 *   }
 * });
 *
 * const Component = () => {
 *   const styles = useThemedStyles(createStyles);
 *   return <View style={styles.container} />;
 * };
 * ```
 */

import { useMemo } from 'react';
import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { useTheme } from '../infrastructure/stores/themeStore';
import type { Theme } from '../core/themes';

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

/**
 * Hook for creating themed styles
 * Returns memoized styles that update when theme changes
 * 
 * @param styleFactory - Function that creates styles from theme
 * @param useStyleSheet - Whether to wrap with StyleSheet.create (default: false)
 * @returns Memoized styles object
 */
export function useThemedStyles<T extends NamedStyles<T>>(
  styleFactory: (theme: Theme) => T,
  useStyleSheet = false,
): T {
  const { theme } = useTheme();

  return useMemo(() => {
    const styles = styleFactory(theme);
    return useStyleSheet ? StyleSheet.create(styles) : styles;
  }, [theme, styleFactory, useStyleSheet]);
}

/**
 * Convenience hook for StyleSheet.create wrapped styles
 * Returns memoized styles that update when theme changes
 * 
 * @deprecated Use useThemedStyles with useStyleSheet=true instead
 */
export function useThemedStyleSheet<T extends NamedStyles<T>>(
  styleFactory: (theme: Theme) => T,
): T {
  return useThemedStyles(styleFactory, true);
}













