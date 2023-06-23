// Importing global SCSS stylesheets
import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { StateScheme, StoreProvider } from "app/providers/storeProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";

// Defining defaultReducers object with loginForm reducer
const defaultReducers:DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm:loginReducer
}

// StoreDecorator is a higher-order component function that takes a StoryComponent and returns it wrapped in StoreProvider component
export const StoreDecorator =(state:DeepPartial<StateScheme>,asyncReducers?:DeepPartial<ReducersMapObject<StateScheme>>)=> (StoryComponent:StoryFn ) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{...defaultReducers,...asyncReducers}}>
            {/* Rendering the StoryComponent */}
            <StoryComponent/>
        </StoreProvider>
    );
}
