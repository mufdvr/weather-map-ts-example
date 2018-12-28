import { combineEpics } from 'redux-observable'

import cityMap from '../features/CityMap/epics'

export default combineEpics(
  ...cityMap,
  )
