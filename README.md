##### by servisofts.com
# **servisofts-component** 

<p align="center">
  <a href="https://www.npmjs.com/package/servisofts-component">
    <img src="https://img.shields.io/npm/v/servisofts-component?color=brightgreen&label=npm%20package" alt="Current npm package version." />
  </a>
  <a href="https://reactnative.dev/docs/contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
</p>


Servisofts Component is a library for Android, IOS & web for easing app development in react-native-web.

## Table of contents 
- [**servisofts-component**](#servisofts-component)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
    - [**Using React Native >= 0.60**](#using-react-native--060)
      - [**iOS Platform:**](#ios-platform)
      - [**Android Platform:**](#android-platform)
      - [Using React Native < 0.60](#using-react-native--060-1)
    - [**Configure 'react-native-web' proyect**](#configure-react-native-web-proyect)
      - [Configure 'metro.config.js'](#configure-metroconfigjs)
      - [Configure '.eslintrc.js'](#configure-eslintrcjs)
  - [Usage](#usage)

## Getting started
Install the required dependences using npm:
```
npm install --save servisofts-socket react-native-gesture-handler @react-navigation/native @react-navigation/stack
```

Install the library using npm:
```
npm install --save servisofts-component
```

### **Using React Native >= 0.60**
Linking the package manually is not required anymore with [Autolinking](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md).

#### **iOS Platform:**

  `$ cd ios && pod install && cd ..` # CocoaPods on iOS needs this extra step

#### **Android Platform:**

  Modify your **`android/build.gradle`** configuration to match `minSdkVersion = 21`:
  ```
  buildscript {
    ext {
      ...
      minSdkVersion = 21
      ...
    }
  ```
#### Using React Native < 0.60
--``not supported``--

### **Configure 'react-native-web' proyect**

#### Configure 'metro.config.js'
You will need a [metro.config.js](https://facebook.github.io/metro/docs/en/configuration.html) file in order to use a ( svg , mp3, otf ) extencion.
Inside a `module.exports` object, create a key called `resolver` with another object called `assetExts`. The value of `assetExts` should be an array of the resource file extensions you want to support.

If you want to support `.pem` files (plus all the already supported files), your `metro.config.js` would like like this:
```javascript
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => { 
	const {  
		resolver: { 
			sourceExts, 
			assetExts 
		}  
	} = await getDefaultConfig(); 
    assetExts.push("pem");
	return {
		transformer: {      
			babelTransformerPath: require.resolve("react-native-svg-transformer")    
		},    
		resolver: {
			assetExts: assetExts.filter(ext => ext !== "svg"),
			sourceExts: [...sourceExts, "svg","mp3" ]    
			
		}};
})();
```


#### Configure '.eslintrc.js'
You will need a [.eslintrc.js](https://eslint.org/docs/user-guide/configuring/)

 your `.eslintrc.js` would like like this:
```javascript
module.exports = {
  root: true,
  extends: ["@react-native-community", "react-app", "react-app/jest"],
  rules: {
    'prettier/prettier': 0,
  },
};
```

## Usage
In ``src/app.js`` import ``SComponentContainer``

```javascript
import React from 'react';
import { SComponentContainer } from 'servisofts-component';

const App = () => {
  return (
    <SComponentContainer
      debug
      theme={{
        initialTheme: "dark", //In
        themes: {
          default: {
            barStyle: "dark-content",
            barColor: "#ffffff",
            primary: "#ffffff",
            secondary: "#000000",
            background: "#dddddd"
          },
          dark: {
            barStyle: "light-content",
            barColor: "#000000",
            primary: "#000000",
            secondary: "#ffffff",
            background: "#222222"
          }
        }
      }}>

    { /* ... */ }

    </SComponentContainer>
  );
};


```


