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
import { isValidDesignTokens, getValidThemeMode } from '../core/utils/tokenValidator';

/**
 * Creates design tokens with fallback handling
 * 
 * @param mode - Theme mode
 * @returns Design tokens or fallback tokens
 */
const createTokensWithFallback = (mode: string | undefined | null): DesignTokens => {
  const validMode = getValidThemeMode(mode);
  
  try {
    const tokens = createDesignTokens(validMode);
    
    if (!isValidDesignTokens(tokens)) {
      /* eslint-disable-next-line no-console */
      if (__DEV__) console.warn('[useAppDesignTokens] Invalid tokens returned, using fallback');
      return createDesignTokens('light');
    }
    
    return tokens;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    if (__DEV__) console.error('[useAppDesignTokens] Error creating tokens:', error);
    return createDesignTokens('light');
  }
};

export const useAppDesignTokens = (): DesignTokens => {
  const { themeMode } = useDesignSystemTheme();
  
  // Memoized tokens creation with validation (DRY + KISS)
  return useMemo(() => createTokensWithFallback(themeMode), [themeMode]);
};

