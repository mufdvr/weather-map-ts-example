import Types from 'Types'
import { Epic } from 'redux-observable'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'

import { addCity } from './actions'
import { CityMapAction } from '../CityMap'
import * as api from './api'

const addCityAction: Epic<CityMapAction, CityMapAction, Types.RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(addCity.request)),
    switchMap(action =>
      ajax.getJSON(api.weatherMap(action.payload)).pipe(
        map(addCity.success),
        catchError(error => of(addCity.failure(error.response)))
      )
    )
  )

export default [
  addCityAction,
]