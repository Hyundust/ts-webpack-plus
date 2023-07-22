import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { getArticlePageHasMore,getArticlePageNumber,getArticlePageIsLoading } from '../selector/ArticlePageSelectors';
import { ArticlePageActions } from '../slice/articlePageSlice';
import { fetchArticleList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchNextArticlesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getArticlePageHasMore(getState());
            const page = getArticlePageNumber(getState());
            const isLoading = getArticlePageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(ArticlePageActions.setPagePagination(page + 1));
                dispatch(fetchArticleList({
                    page: page + 1,
                }));
            }
        },
    );
