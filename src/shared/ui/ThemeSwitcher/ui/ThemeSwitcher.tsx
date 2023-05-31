import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { useTheme, Theme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    // Destructuring theme and toggleThem functions of 'useTheme' hook.
    const { theme, toggleTheme } = useTheme()

    return (
        <div>

            <Button theme = {ThemeButton.CLEAR}
                className = {classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}>               {/* A button for toggling the themes */}
                {theme === Theme.Dark ? <DarkIcon/> : <LightIcon/>}
            </Button>

        </div>
    )
}
