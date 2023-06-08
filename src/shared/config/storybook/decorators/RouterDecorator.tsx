import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

// This function is a decorator for styling the stories.
export const RouterDecorator =()=> (StoryComponent:StoryFn ) => {

    return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>


    )
}