// We are importing the types `Meta` and `StoryObj` from `@storybook/react`
import type { Meta, StoryObj } from '@storybook/react';
// We are importing the `Button` and `ThemeButton` components from the './Button' file
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

// We declare an object `meta` with two properties: `title` and `component`.
// `title` specifies the name of the storybook which we will see in the left sidebar of the storybook UI.
// `component` is the component that we are writing the story for.
// `satisfies` property ensures that the `meta` object strictly follows the `Meta` type.
const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

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
export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};


export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
  };
NormalDark.decorators = [ThemeDecorator(Theme.Dark)]



export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
  };

  CircleDark.decorators = [ThemeDecorator(Theme.Dark)]