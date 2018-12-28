import { action, createAsyncAction } from 'typesafe-actions'
import { ICityMap } from './models'

import * as types from './constants'

export const addCity = createAsyncAction(
    types.ADD_CITY_REQUEST,
    types.ADD_CITY_SUCCESS,
    types.ADD_CITY_FAILURE
  )<string, ICityMap, RequestError>()

export const deleteCity = (index: number) => action(types.DELETE_CITY, index)

export const sortByCity = () => action(types.SORT_BY_CITY)