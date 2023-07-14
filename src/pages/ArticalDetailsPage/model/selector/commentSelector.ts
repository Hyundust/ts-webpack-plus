import { StateScheme } from "app/providers/storeProvider";

export const getArticleCommentsIsLoading = (state: StateScheme) => state.articleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateScheme) => state.articleDetailsComments?.error;
