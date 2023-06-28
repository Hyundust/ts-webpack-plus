// Importing necessary modules and libraries
import { Suspense, useMemo } from 'react' // A component that enables rendering fallback content while waiting for something to load. 
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom' // Routing components provided by react-router-dom library
import { RouteConfig } from 'shared/config/routeConfig/routeConfig' // Object containing the configurations required for routing
import { PageLoader } from 'widgets/PageLoader/PageLoader' // A loading spinner component 
import { getUserData } from 'entyes/User'
import { memo } from 'react'
// Defining the AppRouter functional component
const AppRouter = () => {

    const isItAuth = useSelector(getUserData);

    const routes = useMemo(()=>{
        return Object.values(RouteConfig).filter(routes=>{
            if(routes.authOnly && !isItAuth){
                return false;
            }
            return true
        })
        },[isItAuth])
    return (
        <Routes> {/* Where to render the components based on the given paths */}
            {routes.map(({ element, path }) => ( /* Mapping through each route object in RouteConfig and rendering the corresponding component with its path */
                <Route
                    key={path}
                    path={path}
                    element={(/* Wrapping the element prop with Suspense to show a loader until the component is loaded*/
                        <Suspense fallback={<PageLoader/>}>
                            <div className='page-wrapper'>
                                {element} {/* The component itself specified in RouteConfig */}
                            </div>
                        </Suspense>)}
                />
            ))}
        </Routes>
    )
}

export default memo(AppRouter)
