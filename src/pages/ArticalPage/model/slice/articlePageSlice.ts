import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateScheme } from 'app/providers/storeProvider'
import { Article, ArticleView } from 'entyes/Article/model/types/article'
import { ArticlePageScheme } from '../types/articleDetails'
import { fetchArticleList } from '../service/fetchArticlesList'

const articlesAdapter = createEntityAdapter<Article>({
    selectId:(article:Article)=>article.id
})

export const getArticlesPage = articlesAdapter.getSelectors<StateScheme>(
    (state:StateScheme)=>state.articlesPage ||  articlesAdapter.getInitialState()
)

export const ArticlePageSlice = createSlice({
  name: 'ArticlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageScheme>({

        isLoading:false,
        view:ArticleView.SMALL,
        error:undefined,
        ids:[],
        entities:{}

  }),
  reducers: {
    setView:(state,action:PayloadAction<ArticleView>)=>{
        state.view = action.payload

    }


   
    
   
  }
  ,extraReducers(builder) {
    builder
        .addCase(fetchArticleList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        })
        
        .addCase(fetchArticleList.fulfilled, (
            state,
            action: PayloadAction<Article[]>,
        ) => {
            state.isLoading = false;
            articlesAdapter.setAll(state,action.payload);
            
        })
        .addCase(fetchArticleList.rejected, (state, action) => {
            state.isLoading= false;
            state.error = action.payload;
        })
    },
      
  })

// Action creators are generated for each case reducer function
export const { actions:ArticlePageActions } =ArticlePageSlice
export const { reducer:ArticlePageReducer } = ArticlePageSlice
