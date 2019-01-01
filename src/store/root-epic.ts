import { combineEpics } from 'redux-observable'

import weatherMap from '../features/WeatherMap/epics'

export default combineEpics(
  ...weatherMap,
  )
