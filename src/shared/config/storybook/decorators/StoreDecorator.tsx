// Importing global SCSS stylesheets
import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { StateScheme, StoreProvider } from "app/providers/storeProvider";
import {  ReducersMapObject } from "@reduxjs/toolkit";
import { ReducerList } from "shared/lib/components/ModLoader/ModuleLoader";


// Defining defaultReducers object with loginForm reducer
const defaultAsyncReducers: ReducerList = {
    
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
