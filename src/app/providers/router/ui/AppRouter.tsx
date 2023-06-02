import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

const AppRouter = () => {
    return (
            <Routes> {/* Where to render the components based on the given paths */}
                {Object.values(RouteConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path = {path}
                        element ={(
                            <Suspense fallback = {<PageLoader/>}>
                                <div className='page-wrapper'>
                                    {element}
                                </div>

                            </Suspense>)}

                    />
                )) }
            </Routes>
    )
}

export default AppRouter
