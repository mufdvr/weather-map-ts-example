import { combineReducers } from 'redux'

import { cityMapReducer } from 'features/CityMap'

const rootReducer = combineReducers({
  cityMap: cityMapReducer,
})

export default rootReducer
