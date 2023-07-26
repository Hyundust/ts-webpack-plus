// Importing the necessary plugins and types from their respective packages.
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import CopyPlugin from "copy-webpack-plugin"

// Defining a function called buildPlagins that takes an object with paths property and returns an array of Webpack plugins.
export function buildPlagins ({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        // Creating an instance of HtmlWebpackPlugin to generate HTML file for the bundled JavaScript files.
        new HtmlWebpackPlugin({ template: paths.html }),
        
        // Adding a progress plugin to display compilation progress during the build process.
        new webpack.ProgressPlugin(),
        
        // Extracting CSS into separate files using MiniCssExtractPlugin.
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        
        // Defining global constants using DefinePlugin.
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        
        // Copying files or directories using CopyPlugin.
        new CopyPlugin({
            patterns: [
              { from: paths.locales, to: paths.buildLocales },  
            ],
          })
    ]

    // Adding BundleAnalyzerPlugin to analyze the size of the output bundle(s).
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));

    if (isDev) {
        // Conditional logic can be added here based on the value of 'isDev'.
    }

    return plugins;
}
