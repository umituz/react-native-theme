# @umituz/react-native-design-system-theme

Theme management system for React Native apps - Colors, design tokens, and theme state management.

## Installation

```bash
npm install @umituz/react-native-design-system-theme
```

## Peer Dependencies

- `react` >= 18.2.0
- `react-native` >= 0.74.0
- `zustand` >= 5.0.2
- `@umituz/react-native-design-system` >= 1.5.0

## Usage

### Basic Usage

```typescript
import { useAppDesignTokens, useDesignSystemTheme } from '@umituz/react-native-design-system-theme';

const MyComponent = () => {
  const tokens = useAppDesignTokens();
  const { themeMode, setThemeMode } = useDesignSystemTheme();

  return (
    <View style={{
      backgroundColor: tokens.colors.primary,
      padding: tokens.spacing.md
    }}>
      <Text style={tokens.typography.bodyLarge}>Hello!</Text>
    </View>
  );
};
```

### Syncing with App Theme

```typescript
import { useDesignSystemTheme } from '@umituz/react-native-design-system-theme';
import { useTheme } from '@domains/theme';

// Sync app theme with design system
const { themeMode } = useTheme();
const { setThemeMode } = useDesignSystemTheme();

useEffect(() => {
  setThemeMode(themeMode);
}, [themeMode]);
```

## API

### Hooks

- `useAppDesignTokens()` - Get theme-aware design tokens
- `useDesignSystemTheme()` - Get/set theme mode

### Colors

- `lightColors` - Light theme color palette
- `darkColors` - Dark theme color palette
- `getColorPalette(mode)` - Get color palette for theme mode
- `withAlpha(hexColor, alpha)` - Add alpha transparency to hex color

### Token Factory

- `createDesignTokens(mode)` - Create complete design tokens for theme mode
- `STATIC_DESIGN_TOKENS` - Static design tokens (light theme only)

### Types

- `ThemeMode` - 'light' | 'dark'
- `ColorPalette` - Color palette type
- `DesignTokens` - Complete design tokens type

## License

MIT

