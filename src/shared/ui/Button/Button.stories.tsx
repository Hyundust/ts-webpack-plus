// We are importing the types `Meta` and `StoryObj` from `@storybook/react`
import type { Meta, StoryObj } from '@storybook/react';

// We are importing the `Button` and `ThemeButton` components from the './Button' file
import { Button, SizeButton, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';

// We declare an object `meta` with two properties: `title` and `component`.
// `title` specifies the name of the storybook which we will see in the left sidebar of the storybook UI.
// `component` is the component that we are writing the story for.
// `satisfies` property ensures that the `meta` object strictly follows the `Meta` type.
const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

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
export const Primary: Story = {
  args: {
    children: 'Button',   
  },
};


export const Secondary: Story = {
  args: {
    children: 'Button',
    theme:ThemeButton.CLEAR
  },
};

export const OUTLINE: Story = {
    args: {
      children: 'Button',   
      theme:ThemeButton.OUTLINE
    },
  };
OUTLINE.decorators = [ThemeDecorator(Theme.Light)]

export const BACKGROUNDTheme: Story = {
  args: {
    children: 'Button',   
    theme:ThemeButton.BACKGROUND
  },
};
BACKGROUNDTheme.decorators = [ThemeDecorator(Theme.Light)]

export const BACKGROUNDINVTheme: Story = {
  args: {
    children: 'Button',   
    theme:ThemeButton.BACKGROUND_INVERTED
  },
};
BACKGROUNDINVTheme.decorators = [ThemeDecorator(Theme.Light)]

export const Squared: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    squared:true
  },
};

export const sizeM: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    size:SizeButton.M
  },
};
export const sizeL: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    size:SizeButton.L
  },
};
export const sizeXL: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    size:SizeButton.XL
  },
};


export const SquaredsizeM: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    squared:true,
    size:SizeButton.M
  },
};
export const SquaredsizeL: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    squared:true,
    size:SizeButton.L
  },
};
export const SquaredsizeXL: Story = {
  args: {
    children: '>',   
    theme:ThemeButton.BACKGROUND_INVERTED,
    squared:true,
    size:SizeButton.XL
  },
};