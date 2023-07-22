import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entyes/Article/model/types/article';
import { getArticlePageLimit } from '../selector/ArticlePageSelectors';


interface PagePaginationProps{
    page?:number
}


export const fetchArticleList = createAsyncThunk<
    Article[],
    PagePaginationProps,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (props, thunkApi) => {

            const {page = 1 } = props;
            const { extra, rejectWithValue,getState } = thunkApi;
            const limit  = getArticlePageLimit(getState())


            try {
                const response = await extra.api.get<Article[]>(`/articles`,{
                    params: {
                        _expand:"user",
                        _limit:limit,
                        _page:page
                    }
                });

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
