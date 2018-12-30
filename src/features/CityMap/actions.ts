import { createAsyncAction, createStandardAction } from 'typesafe-actions'
import { ICityMap } from './models'

import * as types from './constants'

export const addCity = createAsyncAction(
    types.ADD_CITY_REQUEST,
    types.ADD_CITY_SUCCESS,
    types.ADD_CITY_FAILURE
  )<string, ICityMap, RequestError>()

export const deleteCity = createStandardAction(types.DELETE_CITY)<number>()

export const sortByCity = createStandardAction(types.SORT_BY_CITY)<void>()