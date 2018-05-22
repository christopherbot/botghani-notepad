import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'

import App from './src/components/App/App'

import store from './src/state/store'

class BotghaniNotepad extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default BotghaniNotepad
