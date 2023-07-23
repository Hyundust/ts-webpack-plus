import { StateScheme } from "app/providers/storeProvider";
import { ArticleView } from "entyes/Article/model/types/article";
import { ArticleSortField } from "entyes/Article/model/types/article";

export const getArticlePageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading;
export const getArticlePageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlePageView= (state: StateScheme) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlePageLimit = (state: StateScheme) => state.articlesPage?.limit || 9
export const getArticlePageNumber= (state: StateScheme) => state.articlesPage?.page || 1
export const getArticlePageHasMore= (state: StateScheme) => state.articlesPage?.hasMore
export const getArticlePageInited= (state: StateScheme) => state.articlesPage?.__inited
export const getArticlePageOrder= (state: StateScheme) => state.articlesPage?.order ?? "asc"
export const getArticlePageSearch= (state: StateScheme) => state.articlesPage?.search ?? ""
export const getArticlePageSort= (state: StateScheme) => state.articlesPage?.sort ?? ArticleSortField.CREATED


