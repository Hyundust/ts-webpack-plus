// Importing necessary types and objects from their respective packages.
import { type BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

// Defining a function called buildDevServer that takes an object with BuildOption properties and returns a valid configuration object for the Webpack development server.
export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
    // Setting the port of the dev server to PORT from the options object
        port: options.PORT,
        // Setting the 'open' property to true, which opens the project in default browser automatically.
        open: true,
        // Setting up fallback to index.html file for deep-linking support in your application.
        historyApiFallback: true,
    }
}
