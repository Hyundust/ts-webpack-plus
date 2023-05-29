// Importing the useContext hook from React and importing LOCAL_STORAGE_THEME_KEY, ThemeContext, and Theme enums from the themeContext file.
import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "app/providers/themeProvider/lib/themeContext";

// Defining an interface called UseThemeResult, which has two properties: toggleTheme function and theme property.
interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

// Declaring a custom hook called useTheme, which returns the UseThemeResult object that provides context data for theme toggling. 
export function useTheme(): UseThemeResult {
    
    // Using the useContext hook to access the current context value of ThemeContext.Provider.
    const { theme, setTheme } = useContext(ThemeContext);

    // Creating a function called toggleTheme that changes the current theme to its opposite form and saves the new theme preference in localStorage.
    const toggleTheme = () => {

        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    // Returning an object with theme and toggleTheme properties.
    return {
        theme,
        toggleTheme
    }
}
