import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateScheme } from 'app/providers/storeProvider'
import { Article, ArticleView } from 'entyes/Article/model/types/article'
import { ArticlePageScheme } from '../types/articleDetails'
import { fetchArticleList } from '../service/fetchArticlesList'
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localstorage'


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
        entities:{},
        page: 1 ,
        hasMore : true,
        __inited:false
        

  }),
  reducers: {
    setView:(state,action:PayloadAction<ArticleView>)=>{
        state.view = action.payload
        localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY,action.payload)
    },
    setInitialState: (state) => {
        const view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticleView;
        state.view = view;
        state.limit = view === ArticleView.BIG ? 4 : 9;
        state.__inited = true;
    },
    setPagePagination:(state, action: PayloadAction<number>)=>{
            state.page = action.payload;
        }
    },
    extraReducers(builder) {
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
            articlesAdapter.addMany(state,action.payload);
            state.hasMore = action.payload.length > 0 ;
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
