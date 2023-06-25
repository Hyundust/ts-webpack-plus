// Importing the necessary plugins and types from their respective packages.
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

// Defining a function called buildPlagins that takes an object with paths property and returns an array of Webpack plugins.
export function buildPlagins ({ paths, isDev,apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__:JSON.stringify(apiUrl)
        }),


    ]

    plugins.push( 
        new BundleAnalyzerPlugin(
        {
            openAnalyzer:false
        }
    ))
    if (isDev){
        
    }

    return plugins;
}
  