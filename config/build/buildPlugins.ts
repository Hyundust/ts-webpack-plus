// Importing the necessary plugins and types from their respective packages.
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// Defining a function called buildPlagins that takes an object with paths property and returns an array of Webpack plugins.
export function buildPlagins({paths,isDev}:BuildOptions): webpack.WebpackPluginInstance[] {
    
    // Returning an array of three plugins: 
    // 1) HtmlWebpackPlugin which is responsible for generating an HTML file with script and link tags to include bundles.
    // 2) webpack.ProgressPlugin which provides current progress during compilation.
    // 3) MiniCssExtractPlugin which extracts CSS into separate files and adds them as links in the generated HTML file.
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/[name].[contenthash:8].css",
            chunkFilename:"css/[name].[contenthash:8].css"
        }),
        new webpack.DefinePlugin({
            "__IS_DEV__": JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
