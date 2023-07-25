import {
    createEntityAdapter,
    createSlice, EntityState, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entyes/Comments/model/types/commentTypes';
import { StateScheme } from 'app/providers/storeProvider';
import { ArticleDetailsPageRecomendationScheme } from '../types/ArticleDetailsPageRecomendationScheme';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Article } from 'entyes/Article/model/types/article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recomendationAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id
});

export const getArticleRecomendations = recomendationAdapter.getSelectors<StateScheme>(
    (state) => state.articleDetailsPage?.recommendations || recomendationAdapter.getInitialState(),
);

const ArticleDetailsPageRecomendationsSlice = createSlice({
    name: 'ArticleDetailsPageRecomendationsSlice',

    initialState: recomendationAdapter.getInitialState<ArticleDetailsPageRecomendationScheme>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action: PayloadAction<Article[]>,
            ) => {
                state.isLoading = false;
                recomendationAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: ArticleDetailsPageRecomendationsReducer } = ArticleDetailsPageRecomendationsSlice;
