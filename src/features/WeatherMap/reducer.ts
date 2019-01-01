import { combineReducers } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import * as types from './constants'

import { ICity } from './models'
import * as actions from './actions'


export interface IWeatherMapState {
  readonly weatherMap: {
    order: number
    payload: ICity[]
  }
  readonly fetching: boolean
  readonly error: RequestError
}

export type WeatherMapAction = ActionType<typeof actions>

export default combineReducers<IWeatherMapState, WeatherMapAction>({
  weatherMap: (state = { order: 1, payload: [] }, action) => {
    switch (action.type) {
      case getType(actions.addCity.success):
        return {
          ...state,
          payload: [...state.payload, action.payload]
        }
      case getType(actions.deleteCity):
        state.payload.splice(action.payload, 1)
        return {
          ...state,
          payload: [...state.payload]
        }
      case getType(actions.sortByCity):
        return {
          order: state.order * -1,
          payload: [...state.payload.sort((a, b) => {
            if (a.name < b.name) {
              return state.order * -1
            }
            if (a.name > b.name) {
              return state.order
            }
            return 0
          })]
        }
      default:
        return state
    }
  },
  fetching: (state = false, action) => {
    switch (action.type) {
      case types.ADD_CITY_REQUEST:
        return true
      case types.ADD_CITY_SUCCESS:
      case types.ADD_CITY_FAILURE:
        return false
      default:
        return state    
    }
  },
  error: (state, action) => {
    return action.type === types.ADD_CITY_FAILURE ? action.payload : { cod: 0, message: '' }
  }
})
