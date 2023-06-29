// Importing necessary modules and libraries
import { Suspense, useCallback } from 'react'; // Importing the required hooks from React
import { Route, Routes } from 'react-router-dom'; // Importing the Route and Routes components from react-router-dom
import { AppRoutesProps, RouteConfig } from 'shared/config/routeConfig/routeConfig'; // Importing AppRoutes and RouteConfig from shared/config/routeConfig/routeConfig
import { PageLoader } from 'widgets/PageLoader/PageLoader'; // Importing the PageLoader component from widgets/PageLoader/PageLoader
import { memo } from 'react'; // Importing the memo function from React
import { RequireAuth } from './RequireAuth';

// Defining the AppRouter functional component
const AppRouter = () => {

    // Define a renderWithWrapper callback function using useCallback hook
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {

        // Create the element with suspense fallback for lazy loading
        const element = (
            <Suspense fallback={<PageLoader/>}>
                <div className='page-wrapper'>
                    {route.element} {/* The component itself specified in RouteConfig */}
                </div>
            </Suspense>
        );
        
        // Return a Route component with the specified path and element, wrapped with authentication check if necessary
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth children={element}/> : element}
            />
        );
    }, []);

    // Render the Routes component and map through all routes defined in RouteConfig
    // For each route, call the renderWithWrapper callback function to render the route with proper wrapping
    return (
        <Routes> 
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
}

export default memo(AppRouter); // Memoize the AppRouter component to optimize rendering performance
