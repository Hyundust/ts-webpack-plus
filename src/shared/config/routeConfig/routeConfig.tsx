import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { ProfilePage } from 'pages/ProfilePage'
import { NotFound } from 'pages/NotFoundPage/NotFoundPage'
import { ArticalPage } from 'pages/ArticalPage'
import { ArticalDetailsPage } from 'pages/ArticalDetailsPage'


export type AppRoutesProps = RouteProps & {
    authOnly?:boolean

}
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = "not_found",
    PROFILE = "profile",
    ARTICALS = "articals",
    ARTICALS_DETAILS = "articals_details"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICALS]: '/articals',
    [AppRoutes.ARTICALS_DETAILS]: '/articals/'//+id
}

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
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
        element: <ProfilePage/>,
        authOnly:true   
    },
    [AppRoutes.ARTICALS]:{
        path: RoutePath.articals,
        element: <ArticalPage/>,
        authOnly:true
    },
    [AppRoutes.ARTICALS_DETAILS]:{
        path: `${RoutePath.articals_details}:id` ,
        element: <ArticalDetailsPage/>,
        authOnly:true
    }

}
