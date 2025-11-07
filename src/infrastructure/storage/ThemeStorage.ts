/**
 * Theme Storage
 * Persists theme preference using AsyncStorage
 *
 * CRITICAL: This is a standalone storage utility for theme package.
 * Apps should use this for theme persistence.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ThemeMode } from '../../core/ColorPalette';

const STORAGE_KEY = '@theme_mode';

export class ThemeStorage {
  /**
   * Get stored theme mode
   */
  static async getThemeMode(): Promise<ThemeMode | null> {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (!value) {
        return null;
      }

      // Validate theme mode value
      if (value === 'light' || value === 'dark') {
        return value as ThemeMode;
      }

      return null;
    } catch (error) {
      /* eslint-disable-next-line no-console */
      if (__DEV__) console.error('[ThemeStorage] Error getting theme mode:', error);
      return null;
    }
  }

  /**
   * Save theme mode
   */
  static async setThemeMode(mode: ThemeMode): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, mode);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      if (__DEV__) console.error('[ThemeStorage] Error saving theme mode:', error);
    }
  }

  /**
   * Clear stored theme mode
   */
  static async clearThemeMode(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      /* eslint-disable-next-line no-console */
      if (__DEV__) console.error('[ThemeStorage] Error clearing theme mode:', error);
    }
  }
}






