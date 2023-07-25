import { StateScheme } from "app/providers/storeProvider";

export const getArticleCommentsIsLoading = (state: StateScheme) => state.articleDetailsPage?.comments?.isLoading
export const getArticleCommentsError = (state: StateScheme) => state.articleDetailsPage?.comments?.error
