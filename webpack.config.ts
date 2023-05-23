import path from "path";
import webpack from 'webpack';
// Import functions and types from local configuration files.
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPath } from "./config/build/types/config";


// Define paths to input, output and HTML files
const paths:BuildPath = {
    entry:path.resolve(__dirname,"src","index.ts"),
    build:path.resolve(__dirname,"build"),
    html:path.resolve(__dirname,"public","index.html")
}

// Define the program mode based on the runtime environment.
const mode = "development";
const isDev = (mode==="development");

// Create a Webpack configuration using appropriate options.
const config: webpack.Configuration = buildWebpackConfig({
    mode:"development",
    paths:paths,
    isDev
})

export default config;
