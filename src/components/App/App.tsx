import * as React from 'react'

import { Provider } from 'react-redux'

import store from 'store'
import { containers } from 'features/CityMap'

const App:React.SFC = () => {
  const { WeatherMapRoot } = containers
  return (
    <Provider store={store}>
      <WeatherMapRoot />
    </Provider>
  )
}


export default App