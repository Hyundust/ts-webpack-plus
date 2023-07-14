import { createAsyncThunk } from "@reduxjs/toolkit"
import {  getUserData } from "entyes/User";
import { ThunkConfig } from "app/providers/storeProvider";
import { Comment } from "entyes/Comments";
import { getCommentsText } from "../selector/addCommentFormSelectors";
import { getArticleDetailsData } from "entyes/Article/model/selector/getArticleDetails";



export const SentComments = createAsyncThunk<
                                     Comment,
                                     void,
                                     ThunkConfig<string>>(
  'AddComments/SentComments',
  async (authData, thunkApi) => {

   const {dispatch,extra,rejectWithValue,getState} = thunkApi

    const userData = getUserData(getState())
    const text = getCommentsText(getState())
    const article = getArticleDetailsData(getState())
    

    if(!userData || !text || !article){
        return rejectWithValue("No Data");
    }
      try {
          const response = await extra.api.post<Comment>('/comments', {
            articleId:article?.id,
            userId:userData.id,
            text

          });
          
          if (!response.data) {
              throw new Error();
          }
          
          return response.data;
      } catch (e) {
          return rejectWithValue("error");
      }
  },
);
