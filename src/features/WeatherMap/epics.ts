import Types from 'Types'
import { Epic } from 'redux-observable'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { of } from 'rxjs'

import { addCity } from './actions'
import { WeatherMapAction } from '../WeatherMap'
import * as api from './api'

const addCityAction: Epic<WeatherMapAction, WeatherMapAction, Types.RootState> = (action$, state$, { getJSON }) =>
  action$.pipe(
    filter(isActionOf(addCity.request)),
    switchMap(action =>
      getJSON(api.weatherMap(action.payload)).pipe(
        map(addCity.success),
        catchError(error => of(addCity.failure(error.response)))
      )
    )
  )

export default [
  addCityAction,
]