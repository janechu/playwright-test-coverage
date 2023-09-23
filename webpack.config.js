const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return {
        entry: {
            main: path.resolve(__dirname, "./src/index.tsx")
        },
        mode: "development",
        resolve: {
            extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
        },
        devServer: {
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env'],
                                ["@babel/preset-typescript"],
                                ["@babel/preset-react"]
                            ],
                            plugins: ['istanbul']
                        }
                    }

                },
                {
                    test: /\.(css)$/i,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        plugins: [
            new HTMLWebPackPlugin({
                template: path.resolve(__dirname, "public/index.html")
            })
        ]
    }
}