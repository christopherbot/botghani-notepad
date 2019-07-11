# PAD.io

A React-native list-creating app.

## Table of Contents

1. [Development](#development)
   * [Setup](#setup)
   * [Env Variables](#env-variables)
   * [Running](#running)
   * [Debugging](#debugging)
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
DEBUG=false
PERSIST_STATE=false
```

| **Flag** | **Type** | **Description** |
| --- | --- | --- |
| **DEBUG** | `bool` | Indicates whether the app should run in development mode |
| **PERSIST_STATE** | `bool` | Indicates whether the app state should be persisted across closing and restarting the app |

**IMPORTANT NOTE:**

If you change the value of a variable in `.env`, you must make a change to `env.js` in order for the new value to be applied.
See: https://github.com/christopherbot/botghani-notepad/issues/168

### Running

To run the application on an iphone simulator (like Xcode):

    yarn ios

To run the application on an android emulator:

    yarn andriod

**[Back to top](#table-of-contents)**

### Debugging

In order to debug the app, `remote debugging` must be enabled on the device or simulator.

On the iPhone simulator:
1. Press `Cmd + D` to open the development menu
1. Click `Debug Remote JS`

If remote debugging is unavailable, ensure that `production mode` is not enabled. In the browser Metro bundler, `production mode` is displayed as a toggle near the QR code.

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

In order to install a fresh version of the Expo app, you can do the following:

1. In the simulator menu bar, click `Hardware > Erase All Content and Settings...`.
1. Delete the Expo app within the simulator by clicking and holding down on the Expo app icon on the home page and clicking the `x`.
1. Run `yarn start` and the expo app will be re-installed.

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
import { myFunction } from 'path/to/file'

import Component from 'path/to/component'

import style from 'path/to/style'
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
