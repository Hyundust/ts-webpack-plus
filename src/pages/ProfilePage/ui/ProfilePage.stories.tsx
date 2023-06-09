// We are importing the types `Meta` and `StoryObj` from `@storybook/react`
import type { Meta, StoryObj } from '@storybook/react';

// We are importing the `Button` and `ThemeButton` components from the './Button' file
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Country } from 'entyes/Country';
import { Currency } from 'entyes/Currency';

// We declare an object `meta` with two properties: `title` and `component`.
// `title` specifies the name of the storybook which we will see in the left sidebar of the storybook UI.
// `component` is the component that we are writing the story for.
// `satisfies` property ensures that the `meta` object strictly follows the `Meta` type.
const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

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
  },
};
Primary.decorators = [StoreDecorator({
  profile:{
    form:{
        first: 'John Doe',
        lastname: 'RektFencer',
        city: 'New York',
        country: Country.Czech,
        age:23,
        currency:Currency.CNY,
        username:"steampunk"
    }  
}
})]


export const Secondary: Story = {
  args: {
  },
};
Secondary.decorators = [ThemeDecorator(Theme.Dark),StoreDecorator({
  profile:{
    form:{
        first: 'John Doe',
        lastname: 'RektFencer',
        city: 'New York',
        country: Country.Czech,
        age:23,
        currency:Currency.CNY,
        username:"steampunk"
    }  
}
})]
