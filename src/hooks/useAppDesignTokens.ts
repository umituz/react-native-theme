/**
 * useAppDesignTokens Hook - Theme-Aware Design Tokens
 *
 * ✅ Automatically reads theme from global store
 * ✅ No parameters needed - fully automatic!
 * ✅ Returns tokens for current theme (light/dark)
 * ✅ Single source of truth
 *
 * @example Usage (fully automatic theme-aware)
 * ```typescript
 * import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';
 *
 * const MyComponent = () => {
 *   const tokens = useAppDesignTokens(); // Automatically uses current theme!
 *   return (
 *     <View style={{
 *       backgroundColor: tokens.colors.primary,
 *       padding: tokens.spacing.md
 *     }}>
 *       <Text style={tokens.typography.bodyLarge}>Hello!</Text>
 *     </View>
 *   );
 * };
 * ```
 *
 * How it works:
 * - Reads themeMode from global store (useDesignSystemTheme)
 * - App's theme store syncs to global store automatically
 * - All components get correct tokens without prop drilling
 * - Change theme once, everything updates!
 */

import { useMemo } from 'react';
import { createDesignTokens, type DesignTokens } from '../core/TokenFactory';
import { useDesignSystemTheme } from '../infrastructure/globalThemeStore';

export const useAppDesignTokens = (): DesignTokens => {
  const { themeMode } = useDesignSystemTheme();
  return useMemo(() => createDesignTokens(themeMode), [themeMode]);
};

