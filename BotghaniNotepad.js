import React, { Component } from 'react'
import { Provider } from 'react-redux'

import App from './src/components/App/App'

import store from './src/state/store'

type Props = {};
class BotghaniNotepad extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default BotghaniNotepad
