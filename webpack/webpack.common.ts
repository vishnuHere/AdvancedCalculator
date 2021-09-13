import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";
import dotenv from "dotenv";

dotenv.config();

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
        modules: [path.resolve(__dirname, "../src"), "../node_modules"],
        alias: {
            "@ds-components": path.resolve(
                __dirname,
                "../node_modules/ds-components/components/dist/esm/components/src"
            ),
            "@ds-components-css": path.resolve(
                __dirname,
                "../node_modules/ds-components/components/dist/esm/css/styles.css"
            )
        }
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "index_bundle.[contentHash].js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "qb-wp-[local]"
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css$/,
                include: /node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: "file-loader",

                        options: {
                            modules: true,
                            name: "assets/images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.ejs",
            favicon: "./assets/icon/favicon.ico"
        }),
        new webpack.DefinePlugin({
            "SIGNALLING_API_URL": JSON.stringify(process.env.SIGNALLING_API_URL),
            "SIGNALLING_WS_URL": JSON.stringify(process.env.SIGNALLING_WS_URL)
        })
    ]
};

export default config;
