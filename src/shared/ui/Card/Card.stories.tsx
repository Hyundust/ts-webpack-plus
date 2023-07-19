// We are importing the types `Meta` and `StoryObj` from `@storybook/react`
import type { Meta, StoryObj } from '@storybook/react';
// We are importing the `Button` and `ThemeButton` components from the './Button' file
import { Card } from './Card';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text } from '../Text/Text';

// We declare an object `meta` with two properties: `title` and `component`.
// `title` specifies the name of the storybook which we will see in the left sidebar of the storybook UI.
// `component` is the component that we are writing the story for.
// `satisfies` property ensures that the `meta` object strictly follows the `Meta` type.
const meta = {
  title: 'shared/Card',
  component: Card,
} satisfies Meta<typeof Card>;

// Exporting the `meta` object as default.
export default meta;

//Creating a new type alias `Story` using `StoryObj<typeof meta>`, for better readability.
type Story = StoryObj<typeof meta>;

// Defining stories by exporting constants with each representing different variants of our component.
// `args` property can be used to pass props to the respective components.
// Here we have created 2 stories Primary and Secondary.
// Primary story contains the prop called children with text "Button".
// Secondary story contains the prop called children with text "Button" and theme with value CLEAR.
// Both of these stories belongs to `Button` component.
export const Light: Story = {
  args: {
    children:<Text title={"test"} text={"lol text"} />
}
 
};

  


