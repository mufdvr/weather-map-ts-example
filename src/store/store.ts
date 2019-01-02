import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { ajax } from 'rxjs/ajax'

import Types from 'Types'
import { composeEnhancers } from './utils'
import rootReducer from './root-reducer'
import rootEpic from './root-epic'

const initialState = {}

export const epicMiddleware = createEpicMiddleware<Types.RootAction, Types.RootAction, Types.RootState>({
  dependencies: { getJSON: ajax.getJSON }
})

function configureStore(initState?: object) {
  const middlewares = [epicMiddleware]
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  return createStore(rootReducer, initState!, enhancer)
}

const store = configureStore(initialState)

epicMiddleware.run(rootEpic)

export default store
