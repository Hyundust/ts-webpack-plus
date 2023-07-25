import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article, ArticleType } from 'entyes/Article/model/types/article';




// Create an async thunk to fetch article list
export const fetchArticleRecommendations = createAsyncThunk<
    Article[], // The type of the returned data
    void, // The type of the payload (page pagination props)
    ThunkConfig<string> // The extra thunk configuration
>(
    'articleDetailsPage/fetchArticleRecommendations', // The action type string
    async (_, thunkApi) => { // The async function that will be executed when the action is dispatched

       
        const { extra, rejectWithValue } = thunkApi; // Destructure useful variables from the thunkApi object.
        
        try {

            
            const response = await extra.api.get<Article[]>(`/articles`,{ // Make an asynchronous API request
                params: {
                   _limit:5
                }
            });

            if (!response.data) {
                throw new Error(); // Throw an error if the response data is empty
            }

            return response.data; // Return the fetched article data
        } catch (e) {
            console.log(e); // Log any errors that occurred during the API request
            return rejectWithValue('error'); // Return the value 'error' with the rejected state
        }
    },
);