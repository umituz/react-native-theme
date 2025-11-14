/**
 * Token Validator - Utility for validating design tokens
 * 
 * ✅ DRY: Centralized validation logic
 * ✅ KISS: Simple, focused validation
 * ✅ SOLID: Single Responsibility - only validates tokens
 */

import type { DesignTokens } from '../TokenFactory';

/**
 * Validates if design tokens object is complete and valid
 * 
 * @param tokens - Design tokens to validate
 * @returns true if tokens are valid, false otherwise
 */
export const isValidDesignTokens = (tokens: unknown): tokens is DesignTokens => {
  if (!tokens || typeof tokens !== 'object') {
    return false;
  }

  const tokensObj = tokens as Partial<DesignTokens>;

  // Check required properties exist
  return !!(
    tokensObj.colors &&
    tokensObj.spacing &&
    tokensObj.typography &&
    tokensObj.iconSizes &&
    tokensObj.opacity &&
    tokensObj.avatarSizes &&
    tokensObj.borders
  );
};

/**
 * Gets fallback theme mode if provided mode is invalid
 * 
 * @param mode - Theme mode to validate
 * @param fallback - Fallback mode (default: 'light')
 * @returns Valid theme mode
 */
export const getValidThemeMode = (
  mode: string | undefined | null,
  fallback: 'light' | 'dark' = 'light',
): 'light' | 'dark' => {
  return mode === 'light' || mode === 'dark' ? mode : fallback;
};

