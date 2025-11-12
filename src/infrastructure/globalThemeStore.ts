/**
 * Global Theme Store for Design System
 *
 * Minimal Zustand store for theme state management.
 * Apps can sync their theme state with this global store.
 *
 * WHY THIS EXISTS:
 * - ScreenLayout needs to know current theme mode
 * - Without prop drilling or Context API
 * - Single source of truth for design system components
 * - Apps control theme, design system reacts
 *
 * USAGE IN APP:
 * ```typescript
 * import { useDesignSystemTheme } from '@umituz/react-native-design-system-theme';
 * import { useTheme } from '@domains/theme';
 *
 * // Sync app theme with design system
 * const { themeMode } = useTheme();
 * const { setThemeMode } = useDesignSystemTheme();
 *
 * useEffect(() => {
 *   setThemeMode(themeMode);
 * }, [themeMode]);
 * ```
 */

import { create } from 'zustand';
import type { ThemeMode } from '../core/ColorPalette';

interface GlobalThemeStore {
  /** Current theme mode */
  themeMode: ThemeMode;

  /** Update theme mode (called by app when theme changes) */
  setThemeMode: (mode: ThemeMode) => void;
}

/**
 * Global theme store for design system components
 *
 * This is a MINIMAL store - app has the real theme logic.
 * Design system just mirrors the current theme for its components.
 */
export const useDesignSystemTheme = create<GlobalThemeStore>((set) => ({
  themeMode: 'light',
  setThemeMode: (mode: ThemeMode) => set({ themeMode: mode }),
}));

// Re-export ThemeMode for backward compatibility
export type { ThemeMode };

