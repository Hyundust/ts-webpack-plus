import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
    return (
        <Suspense fallback = {<div>Loading...</div>}>
            <Routes> {/* Where to render the components based on the given paths */}
                {Object.values(RouteConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path = {path}
                        element ={(
                            <Suspense fallback = {<div>Loading...</div>}>
                                <div className='page-wrapper'>
                                    {element}
                                </div>

                            </Suspense>)}

                    />
                )) }
            </Routes>
        </Suspense>
    )
}

export default AppRouter