import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorators';
import {ThemeDecorator} from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import {Theme} from "../../src/app/providers/themeProvider/lib/themeContext";
import {RouterDecorator} from "../../src/shared/config/storybook/decorators/RouterDecorator";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [StyleDecorator,ThemeDecorator(Theme.Light),RouterDecorator()];

export const parameters = preview.parameters;
