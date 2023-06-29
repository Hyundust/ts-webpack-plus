// Importing createContext from React module
import { createContext } from 'react'

// Defining an enum 'Theme' which has two properties.
export enum Theme {
    Light = 'app_light_theme',
    Dark = 'app_dark_theme',
    Orange = 'app_orange_theme'

}

// Declaring an interface for props that will be needed in App.tsx
export interface ThemeContextProps {
    theme?: Theme // Optional parameter of Theme type.
    setTheme?: (theme: Theme) => void // A function with a single parameter. The parameter is of type Theme and the return type is void.
}

// Creating a context object for Theme related properties.
export const ThemeContext = createContext<ThemeContextProps>({})

// Exporting LOCAL_STORAGE_THEME_KEY variable, which is used to access locally stored value of Theme preference.
export const LOCAL_STORAGE_THEME_KEY = 'theme'
