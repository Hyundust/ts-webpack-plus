
import {BuildOptions} from "./types/config";
import webpack from "webpack";
import { buildResolvers } from './buildResolvers'
import {buildPlagins} from "./buildPlugins"
import {BuildLoaders} from "./buildLoaders"
import { buildDevServer } from "./buildDevServer";

// Defining a function named buildWebpackConfig
export function buildWebpackConfig(options:BuildOptions): webpack.Configuration{
    // Extracting paths and mode properties from options object
    const {paths,mode,isDev} = options

     // Returning an object that contains the webpack configuration for this project
     return {
        // Specifying whether we are in development or production mode
        mode:mode,

        // Specifying the entry point for bundling the application
        entry :paths.entry,

        // Specifying where and how the output bundle should be generated
        output :{
                filename: "[name].[contenthash].js",
                path: paths.build,
                clean:true
        },

        // Adding plugins used to modify the webpack build process
        plugins:buildPlagins(options),

        
        module: {
            // Using helper function BuildLoaders() to define all loaders/rules
            rules: BuildLoaders(options)
        },

        // Adding configurations for resolving modules
        resolve: buildResolvers(),
        devtool:isDev?"inline-source-map":undefined,
        devServer:isDev?buildDevServer(options):undefined
     }
}
