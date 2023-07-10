// Importing global SCSS stylesheets
import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { StateScheme, StoreProvider } from "app/providers/storeProvider";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entyes/Profile";
import { ReducerList } from "shared/lib/components/ModLoader/ModuleLoader";
import { articleReducer } from "entyes/Article";

// Defining defaultReducers object with loginForm reducer
const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile:profileReducer,
    articleDetails:articleReducer
  };
  

// StoreDecorator is a higher-order component function that takes a StoryComponent and returns it wrapped in StoreProvider component
export const StoreDecorator =(state:DeepPartial<StateScheme>,asyncReducers?:DeepPartial<ReducersMapObject<StateScheme>>)=> (StoryComponent:StoryFn ) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers,...asyncReducers}}>
            {/* Rendering the StoryComponent */}
            <StoryComponent/>
        </StoreProvider>
    );
}
