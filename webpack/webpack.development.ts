import * as webpack from "webpack";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";

const config: webpack.Configuration = merge(commonConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 3000
    }
});

export default config;
