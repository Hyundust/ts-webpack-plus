import path from 'path'
import type webpack from 'webpack'
// Import functions and types from local configuration files.
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildPath, type BuildEnv } from './config/build/types/config'


export default (env: BuildEnv) => {
    // Define paths to input, output and HTML files
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public',"locales"),
        buildLocales:path.resolve(__dirname, 'build',"locales"),
    }

    // Define the program mode based on the runtime environment.
    const mode = env.mode || 'development'
    const PORT = env.port || 3000
    const isDev = (mode === 'development')
    const apiUrl =  env.apiUrl || "http://localhost:8000"
    
    // Create a Webpack configuration using appropriate options.

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        PORT,
        apiUrl,
        project:"frontend"
    })
    return config
}
