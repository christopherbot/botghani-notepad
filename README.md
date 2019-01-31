# Botghani Notepad

A React-native list-creating app.

## Table of Contents

1. [Development](#development)
   * [Setup](#setup)
   * [Env Variables](#env-variables)
   * [Running](#running)
   * [Development Tools](#development-tools)
1. [JS Style Guide](#js-style-guide)
   * [Import Statements](#import-statements)
   * [Conditional Rendering](#conditional-rendering)


## Development
### Setup

[Expo](https://github.com/expo/expo) is a set of tools, libraries and services which let you build native iOS and Android apps by writing JavaScript and React.

Install [Expo-CLI](https://github.com/expo/expo-cli) globally first: 

    npm install -g expo-cli    

Then install the app dependencies:
    
    yarn install

**[Back to top](#table-of-contents)**

### Env Variables

Create a file named `.env` in the root directory with the following format:

```
PERSIST_STATE=false
```

Flags:

`PERSIST_STATE`: `<bool>` Indicates whether the app state should be persisted across closing and restarting the app

### Running

To run the application on an iphone simulator (like Xcode):

    yarn ios
    
To run the application on an android emulator:

    yarn andriod    

**[Back to top](#table-of-contents)**

### Development tools

#### React Native Debugger
React Native Debugger is a standalone app that allows for easy debugging of React Native apps.

To install the app: `brew cask install react-native-debugger` (you may need to run `brew update` beforehand)

Before opening the app, ensure that no other React-native debugger is open.

To open the app: `yarn rnd`.

Note the port in the RND is run on `19001` because Expo runs on port `19000`.

#### Expo Mobile App

To run your Expo app on your own personal mobile device download the Expo mobile app for iOS or Andriod.

To see the scanable QR code run:

    yarn start 

**[Back to top](#table-of-contents)**

### JS Style Guide

### Import Statements

Import statements should be structured into the following groupings:
- packages and state/util files
- React components
- styles

E.g.
```javascript
import Module from 'package'
import { myFunction } from '../path/to/file'

import Component from '../path/to/component'

import style from '../path/to/style'
```

**[Back to top](#table-of-contents)**

### Conditional Rendering
The format for conditionally rendering markup and React components depends on its size or nesting. Examples provided below:

`{ condition && <Component prop1={value} /> }`

`{ condition ? <Component prop1={value} /> : <OtherComponent /> }`

```jsx
{
  condition &&
    <Component
      prop1={value1}
      prop2={value2}
      prop3={value3}
      prop4={value4}
      prop5={value5}
    />
}
```

```jsx
{
  condition &&
    <Component prop1={value}>
      <Child />
    </Component>
}
```

```jsx
{
  condition
    ? (
      <Component
        prop1={value1}
        prop2={value2}
        prop3={value3}
        prop4={value4}
        prop5={value5}
      />
    )
    : (
      <OtherComponent>
        <Child />
      </OtherComponent>
    )
}
```

**[Back to top](#table-of-contents)**
