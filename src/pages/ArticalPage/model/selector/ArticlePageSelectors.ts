import { StateScheme } from "app/providers/storeProvider";
import { ArticleView } from "entyes/Article/model/types/article";

export const getArticlePageIsLoading = (state: StateScheme) => state.articlesPage?.isLoading;
export const getArticlePageError = (state: StateScheme) => state.articlesPage?.error;
export const getArticlePageView= (state: StateScheme) => state.articlesPage?.view || ArticleView.SMALL;
