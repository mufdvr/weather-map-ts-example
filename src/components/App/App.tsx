import * as React from 'react'

import { Provider } from 'react-redux'

import store from 'store'
import { connected } from 'features/CityMap'

const App:React.SFC = () => {
  const { LayoutConnected: WeatherMapLayout } = connected
  return (
    <Provider store={store}>
      <WeatherMapLayout />
    </Provider>
  )
}


export default App