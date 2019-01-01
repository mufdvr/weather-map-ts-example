import * as React from 'react'

import { Provider } from 'react-redux'

import store from 'store'
import * as WeatherMap from 'features/WeatherMap'

const App:React.SFC = () => {
  const { Layout: WeatherMapLayout } = WeatherMap.containers
  return (
    <Provider store={store}>
      <WeatherMapLayout />
    </Provider>
  )
}


export default App