import { Routes,Route,Link } from 'react-router-dom'
import "./index.scss"
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage'
function App() {
  return (
    < div className='app'>
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