import { Routes,Route,Link } from 'react-router-dom'
import "./styles/index.scss"
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'
import { useContext, useState } from 'react'
import { ThemeContext } from './theme/themeContext'
import { Theme } from './theme/themeContext'


function App() {
  const {theme,setTheme} = useContext(ThemeContext)

  const toggleTheme=()=>{
    setTheme(theme === Theme.Light?Theme.Dark:Theme.Light)
  }

  return (

    < div className={`app ${theme}`}>

      <button onClick={toggleTheme}>Choose your side </button>
        <Link to= {"/"}>Main Page</Link>
        <Link to = {"/about"}>AboutPage</Link>
         
        <Routes>
                <Route path={"/about"} element = {<AboutPage/>}/>
                <Route path={"/"} element = {<MainPage/>}/>
        </Routes>
    </div>
  )
}

export default App