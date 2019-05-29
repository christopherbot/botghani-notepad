import 'react-native'
import Adapter from 'enzyme-adapter-react-16'
import {
  configure,
  shallow,
  mount,
  render,
} from 'enzyme'

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
import { JSDOM } from 'jsdom'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
configure({ adapter: new Adapter() })
global.shallow = shallow
global.mount = mount
global.render = render

/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */
const originalConsoleError = console.error
console.error = (message) => {
  if (message.startsWith('Warning:')) {
    return
  }

  originalConsoleError(message)
}
