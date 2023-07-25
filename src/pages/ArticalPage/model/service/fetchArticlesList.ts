import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article, ArticleType } from 'entyes/Article/model/types/article';
import { getArticlePageLimit, getArticlePageNumber, getArticlePageOrder, getArticlePageSearch, getArticlePageSort, getArticlePageType } from '../selector/ArticlePageSelectors';
import { addQueryParams } from 'shared/lib/url/AddQueryParams/addQueryParams';

// Define the interface for page pagination props
interface fetchArticleListProps{
    replaced?:boolean
}

// Create an async thunk to fetch article list
export const fetchArticleList = createAsyncThunk<
    Article[], // The type of the returned data
    fetchArticleListProps, // The type of the payload (page pagination props)
    ThunkConfig<string> // The extra thunk configuration
>(
    'articlePage/fetchArticleList', // The action type string
    async (_, thunkApi) => { // The async function that will be executed when the action is dispatched

       
        const { extra, rejectWithValue, getState } = thunkApi; // Destructure useful variables from the thunkApi object.
        const limit  = getArticlePageLimit(getState()); // Get the article page limit from the state using a selector.
        const sort = getArticlePageSort(getState()); // Get the article page sort from the state using a selector.
        const order = getArticlePageOrder(getState()); // Get the article page order from the state using a selector.
        const search = getArticlePageSearch(getState());
        const page = getArticlePageNumber(getState()) // Get the article page search from the state using a selector.
        const type = getArticlePageType(getState())
        try {

            addQueryParams({
                sort,order,search,type
            })
            const response = await extra.api.get<Article[]>(`/articles`,{ // Make an asynchronous API request
                params: {
                    _expand:"user", // Query parameter for expanding the "user" field
                    _limit:limit, // Query parameter for the limit of articles per page
                    _page:page, // Query parameter for the current page number
                    _sort:sort, // Query parameter for sorting the articles
                    _order:order,//// Query parameter for specifying the order (ascending or descending)
                    type:type === ArticleType.ALL ? undefined : type,// Query parameter for specifying the type
                    q:search // Query parameter for searching articles based on a given string
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
