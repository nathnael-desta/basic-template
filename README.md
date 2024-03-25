# basic-template
webpack, eslint, stylelint and prettier

Based on content taken from the odin project

Webpack
https://webpack.js.org/guides/getting-started/

Eslint
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code

stylelint
https://stylelint.io/user-guide/get-started/
https://stylelint.io/user-guide/get-started/

Prettier
https://prettier.io/
https://github.com/prettier/eslint-config-prettier#installation

Jest 
https://jestjs.io/docs/getting-started

*****
bugs
*  Jest encountered an unexpected token. Jest failed to parse a file. :-
    - follow along this video, https://youtu.be/ZnIv8u2-XrA, and this link https://babeljs.io/setup#installation
    - install babel with
          npm install @babel/preset-env --save-dev
    - create a .babelrc file and add this to it
          {
              "presets": ["@babel/preset-env"]
          }

* wrong inputs for eslint in settings.json, reset them
  
* ReferenceError: TextEncoder is not defined:-
    - https://stackoverflow.com/questions/19697858/referenceerror-textencoder-is-not-defined
    
* import export error:-
    - from the beginning just install jest don't install with bable and use the basic examples
    
* document or any html file is null:-
    - you have to use jsdom to do that write npm install -D jest-environment-jsdom
    - make a jest.config.js file on the main file directory and add the text below
          module.exports = {
          // ... other Jest configuration options
          moduleNameMapper: {
            "^TextEncoder$": "<rootDir>/node_modules/text-encoding/text-encoding.min.js",
          },
          testEnvironment: "jsdom"
          };
      
    - add the ReferenceError fix from this website, https://stackoverflow.com/questions/19697858/referenceerror-textencoder-is-not-defined
          locate this file node_modules/whatwg-url/dist/encoding.js or .../lib/encoding.js
          add this line at top
              const { TextEncoder, TextDecoder } = require("util");
      
    - inside your js file add up above the text
          const fs = require('fs');
          const JSDOM = require('jsdom').JSDOM;
          
          process.chdir(__dirname);
          const htmlContent = fs.readFileSync('./index.ejs', 'utf8');
          const dom = new JSDOM(htmlContent);
          const document = dom.window.document;

* Jest failed to parse a file:-
    - delete all the bable config files or any thing connected to it (if you don't want to use babel)
    - use commonJS import and export instead of ecmaJS, do it like this:-
          exports.insertAt = insertAt;
          exports.getTile = getTile;


          const index = require("./index.js");
          index.insertAt("J", 10, "double_vertical", myShips))
