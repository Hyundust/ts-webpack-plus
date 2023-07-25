import { StateScheme } from "app/providers/storeProvider";

export const getArticleRecomendationIsLoading = (state: StateScheme) => state.articleDetailsPage?.recommendations?.isLoading
export const getArticleRecomendationError = (state: StateScheme) => state.articleDetailsPage?.recommendations?.error
