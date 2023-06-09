import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme, Theme } from 'app/providers/themeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    // Destructuring theme and toggleThem functions of 'useTheme' hook.
    const { theme, toggleTheme } = useTheme()

    return (
        <div>

            <Button theme = {ThemeButton.CLEAR}
                className = {classNames("", {}, [className])}
                onClick={toggleTheme}>               {/* A button for toggling the themes */}
                {theme === Theme.Dark ? <DarkIcon/> : <LightIcon/>}
            </Button>

        </div>
    )
}
)