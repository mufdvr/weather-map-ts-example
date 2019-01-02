import Types from 'Types'
import { Epic } from 'redux-observable'
import { debounceTime, tap, ignoreElements } from 'rxjs/operators'

const SAVING_DELAY = 3000

const saveStateInLocalStorage: Epic<Types.RootAction, Types.RootAction, Types.RootState, Types.Services> = (action$, state$, { localStorage }) =>
  state$.pipe(
    debounceTime(SAVING_DELAY),
    tap(state => localStorage.saveState(state)),
    ignoreElements()
  )

export default [
  saveStateInLocalStorage
]
