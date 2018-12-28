import { combineReducers } from 'redux'
import { cityMapReducer } from 'features/CityMap'

export default combineReducers({
  cityMap: cityMapReducer
})
