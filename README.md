# react-component-module-frame
## What is this project about?
#### This template was built to make publishing react-components easy. All the basic settings such as tsconfig.json and package.json are done. It is up to you to modify the setting for your own taste.

-----------------------------------------------------------------------------------------------------------------------

#### To download this project  
```
git clone https://github.com/tofusoup429/components-in-loading.git
```
-----------------------------------------------------------------------------------------------------------------------
#### Replace files inside /src with your own component(s) and export them from index.ts.
-----------------------------------------------------------------------------------------------------------------------

#### Once your components are ready to be published, replace name in package.json with your own package name. And build. 
 
#### To build
```
yarn build
``` 
#### the build command transpiles the files located in /src into /dist with ts declaration files such as exampleModule.d.ts.
-----------------------------------------------------------------------------------------------------------------------
#### To publish
```
yarn publish
```
-----------------------------------------------------------------------------------------------------------------------

#### to import this module from other project. 
```
import {RotatingText} from "@tofusoup429/react-component-module-frame"
```


