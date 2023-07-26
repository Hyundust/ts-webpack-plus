import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { ProfilePage } from 'pages/ProfilePage'
import { NotFound } from 'pages/NotFoundPage/NotFoundPage'
import { ArticalPage } from 'pages/ArticalPage'
import { ArticalDetailsPage } from 'pages/ArticalDetailsPage'
import ArticleEditPage from 'pages/ArticleEditPage/ui/ArticleEditPage'

export type AppRoutesProps = RouteProps & {
    authOnly?:boolean

}
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = "not_found",
    PROFILE = "profile",
    ARTICALS = "articals",
    ARTICALS_DETAILS = "articals_details",
    ARTICALS_CREATE = "articals_create",
    ARTICALS_EDIT = "articals_edit",

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
    [AppRoutes.PROFILE]: '/profile/',//+id
    [AppRoutes.ARTICALS]: '/articals',
    [AppRoutes.ARTICALS_DETAILS]: '/articals/',//+id
    [AppRoutes.ARTICALS_CREATE]:'/articals/new',
    [AppRoutes.ARTICALS_EDIT]:'/articals/:id/edit'

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
        path: `${RoutePath.profile}:id`,
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
    },
    [AppRoutes.ARTICALS_EDIT]:{
        path: `${RoutePath.articals_edit}` ,
        element: <ArticleEditPage/>,
        authOnly:true
    },
    [AppRoutes.ARTICALS_CREATE]:{
        path: `${RoutePath.articals_create}` ,
        element: <ArticleEditPage/>,
        authOnly:true
    }


}
