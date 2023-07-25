import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { StateScheme } from 'app/providers/storeProvider'
import { Article, ArticleSortField, ArticleType, ArticleView } from 'entyes/Article/model/types/article'
import { ArticlePageScheme } from '../types/articleDetails'
import { fetchArticleList } from '../service/fetchArticlesList'
import { ARTICLE_VIEW_STORAGE_KEY } from 'shared/const/localstorage'
import { SortOrder } from 'shared/types'


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
        __inited:false,
        search:"",
        limit:9,
        sort:ArticleSortField.TITLE,
        order:"asc",
        type:ArticleType.ALL
        

  }),
  reducers: {
    setView:(state,action:PayloadAction<ArticleView>)=>{
        state.view = action.payload
        localStorage.setItem(ARTICLE_VIEW_STORAGE_KEY,action.payload)
    },
    setOrder:(state,action:PayloadAction<SortOrder>)=>{
        state.order = action.payload
       
    },
    setSearch:(state,action:PayloadAction<string>)=>{
        state.search = action.payload
        
    },
    setSort:(state,action:PayloadAction<ArticleSortField>)=>{
        state.sort= action.payload
      
    },
    setInitialState: (state) => {
        const view = localStorage.getItem(ARTICLE_VIEW_STORAGE_KEY) as ArticleView;
        state.view = view;
        state.limit = view === ArticleView.BIG ? 5 : 9;
        state.__inited = true;
    },
    setPagePagination:(state, action: PayloadAction<number>)=>{
            state.page = action.payload;
        },
    setType:(state,action:PayloadAction<ArticleType>)=>{
            state.type= action.payload
          
        }
    },
    
    extraReducers(builder) {
    builder
        .addCase(fetchArticleList.pending, (state,action) => {
            state.error = undefined;
            state.isLoading = true;

            if(action.meta.arg.replaced){
                articlesAdapter.removeAll(state);
            }
        })
        
        .addCase(fetchArticleList.fulfilled, (
            state,
            action ,
        ) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= (state.limit || 0 ) ;

            if(action.meta.arg.replaced){
                articlesAdapter.setAll(state,action.payload);
            }else{
                articlesAdapter.addMany(state,action.payload);
            }
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
