import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { LandingPage } from 'pages/LandingPage'
import { ProfilePage } from 'pages/ProfilePage'
import { NotFound } from 'pages/NotFoundPage/NotFoundPage'
import { ArticalPage } from 'pages/ArticalPage'
import { ArticalDetailsPage } from 'pages/ArticalDetailsPage'
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage'

export type AppRoutesProps = RouteProps 
export enum AppRoutes {
    LANDING = 'landing',
    ABOUT = 'about',
    NOTFOUND = "not_found",
   
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LANDING]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
    

}

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LANDING]: {
        path: RoutePath.landing,
        element: <LandingPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <LandingPage/>
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFound/>
    },
}
