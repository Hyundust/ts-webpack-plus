// Importing the necessary modules from their respective packages
import { Routes,Route,Link } from 'react-router-dom'
import "./styles/index.scss" // importing global styles
import AboutPage from './pages/AboutPage' // importing component for rendering on route /about
import MainPage from './pages/MainPage' //importing component for rendering on route /
import { useTheme } from './theme/useTheme' // importing hook for managing theme
import { classNames } from './helpers/classNames/classNames'

function App() {

    // Destructuring theme and toggleTheme functions of 'useTheme' hook.
    const {theme,toggleTheme} = useTheme();

    return (
        <div className={classNames("app",{hovered:true,selected:false},[theme,"class2"])}> {/*Adding a div with class name app, and the theme class obtained from the hook*/}

            <button onClick={toggleTheme}>Choose your side </button> {/*A button for toggling the themes*/}
            <Link to= {"/"}>Main Page</Link> {/* A link to the home page */}
            <Link to = {"/about"}>AboutPage</Link> {/* A link to the about page */}

            <Routes> {/* Where to render the components based on the given paths */}
                <Route path={"/about"} element = {<AboutPage/>}/> 
                <Route path={"/"} element = {<MainPage/>}/>
            </Routes>
        </div>
    )
}

export default App //Exporting App as a default module
