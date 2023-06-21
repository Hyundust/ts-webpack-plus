import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { StateScheme, StoreProvider } from "app/providers/storeProvider";
import { DeepPartial } from "@reduxjs/toolkit";


export const StoreDecorator =(state:DeepPartial<StateScheme>)=> (StoryComponent:StoryFn ) => {

    return (
        <StoreProvider initialState={state}>

                    <StoryComponent/>

        </StoreProvider>
    )
}   