import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";

// This function is a decorator for styling the stories.
export const StyleDecorator = (story: () => StoryFn ) => story();