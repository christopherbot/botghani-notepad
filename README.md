# Botghani Notepad

A React-native list-creating app.

## Table of Contents

1. [Development](#development)
   * [Setup](#setup)
   * [Running](#running)
   * [Development Tools](#development-tools)
1. [JS Style Guide](#js-style-guide)
   * [Import Statements](#import-statements)
   * [Conditional Rendering](#conditional-rendering)


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
      prop5={value5} />
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
        prop5={value5} />
    )
    : (
      <OtherComponent>
        <Child />
      </OtherComponent>
    )
}
```

**[Back to top](#table-of-contents)**
