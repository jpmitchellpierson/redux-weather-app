import axios from 'axios';

const API_KEY = '513d36545e6d00199daf8ae758c6de7c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// store and export FETCH_WEATHER variable to keep
// action types consistent between action creators and reducers
// used as convention to limit possibility of bugs 
// caused by typos with a string
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // store a get request w/ city specific url
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}