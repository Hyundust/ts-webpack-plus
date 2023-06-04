// Importing necessary modules and libraries
import { Suspense } from 'react' // A component that enables rendering fallback content while waiting for something to load. 
import { Route, Routes } from 'react-router-dom' // Routing components provided by react-router-dom library
import { RouteConfig } from 'shared/config/routeConfig/routeConfig' // Object containing the configurations required for routing
import { PageLoader } from 'widgets/PageLoader/PageLoader' // A loading spinner component 

// Defining the AppRouter functional component
const AppRouter = () => {
    return (
        <Routes> {/* Where to render the components based on the given paths */}
            {Object.values(RouteConfig).map(({ element, path }) => ( /* Mapping through each route object in RouteConfig and rendering the corresponding component with its path */
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

export default AppRouter
