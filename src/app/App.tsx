// Importing the necessary modules from their respective packages
import './styles/index.scss' // importing global styles
import { useTheme } from './providers/themeProvider' // importing hook for managing theme
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense } from 'react'

const App = () => {
    // Destructuring theme and toggleThem functions of 'useTheme' hook.
    const { theme } = useTheme()

    return (

        <div className={classNames('app', { hovered: true, selected: false }, [theme, 'class2'])}> {/* Adding a div with class name app, and the theme class obtained from the hook */}
            <Suspense fallback = "">
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App // Exporting App as a default module
