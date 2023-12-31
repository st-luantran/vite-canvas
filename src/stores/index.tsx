import { applyMiddleware, createStore } from 'redux'
import { logger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from '../reducers/rootReducer'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
