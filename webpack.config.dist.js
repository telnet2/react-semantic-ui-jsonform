var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: "./dist",
        publicPath: "/dist/",
        filename: "jsonform.js",
        library: "JSONSchemaForm",
        libraryTarget: "umd"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    devtool: "source-map",
    externals: {
        react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react"
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["babel"],
            },
            {
                test: /\.css$/,
                loader: "style!css",
                include: [
                    path.join(__dirname, "css"),
                    path.join(__dirname, "src"),
                    path.join(__dirname, "playground"),
                    path.join(__dirname, "node_modules"),
                ],
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                include: [
                    path.join(__dirname, "css"),
                    path.join(__dirname, "playground"),
                    path.join(__dirname, "node_modules"),
                ],
            }
        ]
    }
};
