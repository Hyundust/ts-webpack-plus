import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/storeProvider";
import { Comment } from "entyes/Comments";


export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get< Comment[]>(`/comments`,{
                    params:{
                        articleId,
                        _expand:"user"
                    }
                });

                if (!response.data) {
                    throw new Error();
                }
                
                if(!articleId){
                    rejectWithValue("error")
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
