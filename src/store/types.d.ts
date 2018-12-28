import { StateType } from 'typesafe-actions'
import { CityMapAction } from 'features/CityMap'
import rootReducer from './root-reducer'

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>
  export type RootAction = CityMapAction
}
