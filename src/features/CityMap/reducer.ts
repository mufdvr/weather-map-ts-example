import { combineReducers } from 'redux'
import { ActionType } from 'typesafe-actions'
import * as types from './constants'

import { ICityMap } from './models'
import * as actions from './actions'


export interface ICityMapState {
  readonly cityMaps: {
    order: number
    payload: ICityMap[]
  }
  readonly fetching: boolean
  readonly error: RequestError
}

export type CityMapAction = ActionType<typeof actions>

export default combineReducers<ICityMapState, CityMapAction>({
  cityMaps: (state = { order: 1, payload: [] }, action) => {
    switch (action.type) {
      case types.ADD_CITY_SUCCESS:
        return {
          ...state,
          payload: [...state.payload, action.payload]
        }
      case types.DELETE_CITY:
        state.payload.splice(action.payload, 1)
        return {
          ...state,
          payload: [...state.payload]
        }
      case types.SORT_BY_CITY:
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
