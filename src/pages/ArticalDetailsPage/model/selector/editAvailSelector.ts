import { createSelector } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "entyes/Article/model/selector/getArticleDetails";
import { getUserData } from "entyes/User";



export const getIfCanEdit = createSelector(
    getArticleDetailsData,
    getUserData,
    (article,user)=>{
            if(!article || !user){
                
                console.log(article?.user.id,"article")
                console.log(user?.id,"user")
                return false
            }
            return article.user.id === user.id
    }
)