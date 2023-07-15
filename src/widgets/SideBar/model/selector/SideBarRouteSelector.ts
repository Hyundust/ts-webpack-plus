import { createSelector } from "@reduxjs/toolkit";
import { } from "app/providers/storeProvider";
import { getUserData } from "entyes/User";
import { SideBarItemType } from "../items";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "../../../../shared/assets/icons/about-20-20.svg"
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg"
import ProfileIcon from "../../../../shared/assets/icons/profile-20-20.svg"
import ArticleIcon from "../../../../shared/assets/icons/article-20-20.svg"


export const getSideBarItems = createSelector(getUserData,(authData)=>{
   const SideBarItemList :SideBarItemType[]=[
        {
            "path":RoutePath.main,
            "Icon":MainIcon,
            "text":"Main Page"
        },
        {
            "path":RoutePath.about,
            "Icon":AboutIcon,
            "text":"About Page"
        },
       
        ]
        if(authData){
            SideBarItemList.push(
                {
                    "path":RoutePath.profile+authData?.id,
                    "Icon":ProfileIcon,
                    "text":"Profile Page",
                     authOnly:true
                },
                {
                    "path":RoutePath.articals,
                    "Icon":ArticleIcon,
                    "text":"Articles",
                     authOnly:true
                }
            )
        }
        return SideBarItemList;
})