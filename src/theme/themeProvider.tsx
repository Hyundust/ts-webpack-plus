import {FC, useMemo, useState,ReactNode} from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './themeContext'
import { Theme } from './themeContext';


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

const themeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    
    const defaultProps = useMemo( ()=>({
        theme:theme,
        setTheme:setTheme
    }),[theme])

  return (
    <ThemeContext.Provider value = {defaultProps}>
       {children}
    </ThemeContext.Provider>
  )
}

export default themeProvider