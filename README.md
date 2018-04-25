![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)
 [![Version](https://img.shields.io/npm/v/webpack-react-md-import-transformer.svg)](https://www.npmjs.com/package/webpack-react-md-import-transformer) ![npm](https://img.shields.io/npm/dt/webpack-react-md-import-transformer.svg)


# webpack-react-md-import-transformer
A basic import transformer to optimize react-md imports.

Table of contents
=================
  * [Important notice](#important-notice)
  * [Installation](#installation)
  * [Bugs/Missing components](#bugsmissing-components)
  * [License](#license)
  * [Author](#author)

Important notice
================
Since react-md v1.3 the /es imports have been changed from `react-md/es/react-md` to `react-md/es/index`. Adjust the transform call in your webpack configuration accordingly.

Installation
============
1. install the **babel-plugin-transform-imports** package:  
```
npm insall --save-dev babel-plugin-transform-imports
```
2. install my **webpack-react-md-import-transformer** package:  
```
npm install --save-dev webpack-react-md-import-transformer
```
3. require my package in your webpack.config.js file:  
```js
const reactMdTransformer = require('webpack-react-md-import-transformer/lib/webpack-react-md-import-transformer.min');
```
4. adjust your js module rule loader to something like that:  
```js
{
  test: /\.(js|jsx)$/,
  use: {
    loader: 'babel-loader',
      query: {
        plugins: [
          [require('babel-plugin-transform-imports'), {
            "react-md/es/index": {
              "transform": reactMdTransformer,
              preventFullImport: true
            }
          }]
        ]
      }
    },
  exclude: /node_modules/
}
```

**That's it.**

Bugs/Missing components
=======================
If you face any build errors feel free to open an issue (https://github.com/Kaishiyoku/webpack-react-md-import-transformer/issues).

Should you face runtime errors where some components are undefined it may be possible that the component import mapping is insufficient for a specific component. In that case please open an issue, too so that I can adjust the mapping rules.

License
=======
MIT (https://github.com/Kaishiyoku/webpack-react-md-import-transformer/blob/master/LICENSE)


Author
======
Twitter: [@kaishiyoku](https://twitter.com/kaishiyoku)  
Website: www.andreas-wiedel.de
