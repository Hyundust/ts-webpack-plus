// Importing necessary modules from React.
import { type FC, useMemo, useState, type ReactNode } from 'react'

// Importing LOCAL_STORAGE_THEME_KEY and Theme enums from the themeContext file.
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '../lib/themeContext'

// Assigning the locally stored value of theme preference to the defaultTheme variable. If there is no stored theme preference, the default value will be Light Theme.
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light

// Declaring a functional component called ThemeProvider, which takes children nodes as props.This component will provide Theme related context data to its child nodes.
const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    // Initializing state by assigning the defaultTheme to theme variable using useState hook.
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    // Using useMemo hook to optimize performance by memoizing the defaultProps object. It has theme and setTheme properties that are taken from current state values when they change.
    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
    // Providing context data to the child nodes through a ThemeContext.Provider component. The value attribute is an object containing the defaultProp values.
        <ThemeContext.Provider value = {defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
