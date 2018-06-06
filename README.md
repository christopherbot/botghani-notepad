# Botghani Notepad

A React-native list-creating app.

## Table of Contents

1. [Development](#development)
   * [Setup](#setup)
   * [Running](#running)
   * [Development Tools](#development-tools)
   * [JS Style Guide](#js-style-guide)


## Development
### Setup

    yarn install

**[Back to top](#table-of-contents)**

### Running

To run the application on an iphone simulator (like Xcode):

    react-native run-ios

**[Back to top](#table-of-contents)**

### Development tools

#### React Native Debugger
React Native Debugger is a standalone app that allows for easy debugging of React Native apps.

To install the app: `brew cask install react-native-debugger` (you may need to run `brew update` beforehand)

Before opening the app, ensure that no other React-native debugger is open.

To open the app: `yarn rnd`

**[Back to top](#table-of-contents)**

### JS Style Guide

### Import Statements

Import statements should be structured into the following groupings:
- packages and state/util files
- React components
- styles

E.g.
```javacsript
import Module from 'package'
import { myFunction } from '../path/to/file'

import Component from '../path/to/component

import style from '../path/to/style'
```

**[Back to top](#table-of-contents)**
