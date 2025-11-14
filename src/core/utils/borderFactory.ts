/**
 * Border Factory - Creates themed borders
 * 
 * ✅ DRY: Centralized border creation logic
 * ✅ KISS: Simple, focused border creation
 * ✅ SOLID: Single Responsibility - only creates borders
 */

import type { BaseTokens } from '../BaseTokens';
import type { ColorPalette } from '../ColorPalette';

/**
 * Creates themed borders with injected border colors
 * 
 * @param baseBorders - Base borders from BASE_TOKENS
 * @param borderColor - Color to inject into borders
 * @returns Themed borders object
 */
export const createThemedBorders = (
  baseBorders: BaseTokens['borders'],
  borderColor: string,
): BaseTokens['borders'] & {
  card: BaseTokens['borders']['card'] & { borderColor: string };
  input: BaseTokens['borders']['input'] & { borderColor: string };
} => ({
  ...baseBorders,
  card: {
    ...baseBorders.card,
    borderColor,
  },
  input: {
    ...baseBorders.input,
    borderColor,
  },
});

