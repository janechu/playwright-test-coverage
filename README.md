# Use [Istanbul](https://istanbul.js.org) coverage collection with [Playwright Test](https://playwright.dev/docs/test-intro)

This is a modification of [mxschmitt](https://github.com/mxschmitt)'s [create react app](https://github.com/mxschmitt/playwright-test-coverage) version, removing the create react app dependencies and relying only on webpack and updated as of 2023.

## Notes

If you are using TypeScript decorators which might not be compatible with the [@babel/plugin-proposal-decorators](https://babeljs.io/docs/babel-plugin-proposal-decorators) and are using the `ts-loader` instead, simply use both of them.

Example modification to `webpack.config.js`:
```js
{
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
        /**
         * loaders start being used from the end of the array
         */
        {
            loader: 'babel-loader',
            options: {
                plugins: ['istanbul']
            }
        },
        {
            loader: 'ts-loader'
        }
    ]
}
```