import { createAsyncThunk } from "@reduxjs/toolkit"
import {  getUserData } from "entyes/User";
import { ThunkConfig } from "app/providers/storeProvider";
import { Comment } from "entyes/Comments";
import { getArticleDetailsData } from "entyes/Article/model/selector/getArticleDetails";
import { addCommentFormActions } from "features/AddComment/model/slice/addCommentFormSlice";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";



export const AddCommentForArticle = createAsyncThunk<
                                     Comment,
                                     string,
                                     ThunkConfig<string>>(
  'AddComments/SentComments',
  async (text, thunkApi) => {

   const {dispatch,extra,rejectWithValue,getState} = thunkApi

    const userData = getUserData(getState())
    const article = getArticleDetailsData(getState())
    
    if(!userData || !article){
      return rejectWithValue("No Data");
  }

    
      try {
          const response = await extra.api.post<Comment>('/comments', {
            articleId:article.id,
            userId:userData.id,
            text

          });
          
          if (!response.data) {
              throw new Error();
          }
          
          dispatch(fetchCommentsByArticleId(article.id))
          return response.data;
      } catch (e) {
          return rejectWithValue("error");
      }
  },
);
