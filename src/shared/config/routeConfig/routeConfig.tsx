import { type RouteProps } from 'react-router-dom'
import { MainPage, AboutPage,NotFound,ProfilePage } from 'pages'


export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = "not_found",
    PROFILE = "profile"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
    [AppRoutes.PROFILE]: '/profile'
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
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    }

}
