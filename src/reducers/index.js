import { combineReducers } from 'redux'

import currentWeatherReducer from './CurrentWeatherReducer'

export default combineReducers({
  currentWeather: currentWeatherReducer
})
