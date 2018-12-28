import Types from 'Types'
import { Epic } from 'redux-observable'
import { filter, switchMap, map } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { ajax } from 'rxjs/ajax'

import { addCity } from './actions'
import { CityMapAction } from '../CityMap'
import * as api from './api'

const addCityAction: Epic<CityMapAction, CityMapAction, Types.RootState> = action$ =>
  action$.pipe(
    filter(isActionOf(addCity.request)),
    switchMap(action =>
      ajax.getJSON(api.weather.replace('{city}', action.payload)).pipe(
        map(addCity.success),
        // catchError(pipe(addCity.failure, of))
      )
    )
  )

export default [
  addCityAction,
]