import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { ArticleSortField, ArticleType } from 'entyes/Article/model/types/article';
import { SortOrder } from 'shared/types';
import { getArticlePageInited } from '../selector/ArticlePageSelectors';
import { ArticlePageActions } from '../slice/articlePageSlice';
import { fetchArticleList } from './fetchArticlesList';
export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlePageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;
                const sortFromUrl = searchParams.get('sort') as ArticleSortField;
                const searchFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type');

                if (orderFromUrl) {
                    dispatch(ArticlePageActions .setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(ArticlePageActions .setSort(sortFromUrl));
                }
                if (searchFromUrl) {
                    dispatch(ArticlePageActions .setSearch(searchFromUrl));
                }
                if (typeFromUrl ) {
                    dispatch(ArticlePageActions .setType(typeFromUrl as ArticleType));
                }

                dispatch(ArticlePageActions.setInitialState());
                dispatch(fetchArticleList({}));
            }
        },
    );
