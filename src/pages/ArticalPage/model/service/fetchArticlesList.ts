import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entyes/Article/model/types/article';

export const fetchArticleList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articlePage/fetchArticleList',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Article[]>(`/articles`);

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
