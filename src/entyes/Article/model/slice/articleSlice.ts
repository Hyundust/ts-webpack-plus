import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsScheme';
import { fetchArticleById } from '../services/fetchArticalById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined
};

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
        .addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        .addCase(fetchArticleById.fulfilled, (
            state,
            action: PayloadAction<Article>,
        ) => {
            state.isLoading = false;
            state.data = action.payload;
            
        })
        .addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading= false;
            state.error = action.payload;
        })
    },
    
   
});

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
