import path from "path";
import { BuildPath } from "../build/types/config";
import  buildCssLoader  from "../build/loaders/buildCSSLoader";
import type webpack from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths:BuildPath = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname,"..","..","src"),
  }

  // Add the src path to the list of directories that webpack should check for modules
  if (config.resolve && config.resolve.modules) {
    config.resolve.modules.push(paths.src);
  }

  // Add TypeScript file extensions to the list of resolvable file extensions (if the extensions array exists)
  if (config.resolve && config.resolve.extensions) {
    config.resolve.extensions.push(".ts",".tsx");
  }

  if (config.module !== undefined && config.module.rules !== undefined) {
    config.module.rules.push(buildCssLoader(true));
  }
    

    // Modify the existing rule that loads svg files using url-loader to exclude .svg files
  if (config.module && config.module.rules) {
      config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule | "...") => {
        if (rule instanceof Object && rule.test && /svg/.test(rule.test.toString())) {
          return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }
  

  return config;

  }