export default function currentWeather(state = [], action) {
  switch (action.type) {
    
    case 'FETCH_CURRENT_WEATHER':
      return action.payload

    default:
      return state
  }
}
