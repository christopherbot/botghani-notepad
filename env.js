import { PERSIST_STATE } from 'react-native-dotenv'

/*
 * IMPORTANT NOTE
 *
 * If you change the value of a variable in `.env`, you must make
 * a change to this file in order for the new value to be applied.
 *
 * See: https://github.com/christopherbot/botghani-notepad/issues/168
 */

const persistState = PERSIST_STATE === 'true'

console.log('Persisting state:', persistState)

export default {
  persistState,
}
