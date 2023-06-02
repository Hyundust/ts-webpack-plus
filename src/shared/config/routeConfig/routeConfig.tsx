import { type RouteProps } from 'react-router-dom'
import { MainPage, AboutPage,NotFound } from 'pages'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*'
}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFound/>
    }

}
