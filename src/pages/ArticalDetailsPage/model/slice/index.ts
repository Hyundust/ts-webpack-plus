import { combineReducers } from "@reduxjs/toolkit";
import { Article } from "entyes/Article/model/types/article";
import { articleDetailsPageScheme } from "../types";
import { articleDetailsCommentsReducer } from "./ArticleDetailsCommentSlice";
import { ArticleDetailsPageRecomendationsReducer } from "./ArticleDetailsPageRecomendationsSlice";

export const articleDetailsPageReducer = combineReducers<articleDetailsPageScheme>({
    recommendations:ArticleDetailsPageRecomendationsReducer,
    comments:articleDetailsCommentsReducer 
})