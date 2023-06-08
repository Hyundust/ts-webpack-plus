import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";

// This function is a decorator for styling the stories.
export const ThemeDecorator =(theme:Theme)=> (StoryComponent:StoryFn ) => {

    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>

        </div>
    )
}