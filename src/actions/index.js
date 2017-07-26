import axios from 'axios';

const API_KEY = '513d36545e6d00199daf8ae758c6de7c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// store and export FETCH_WEATHER variable to keep
// action types consistent between action creators and reducers
// used as convention to limit possibility of bugs caused by typos
export const FETCH_WEATHER = 'FETCH_WEATHER';

// user enters a city and submits the form
// action creator function is called
export function fetchWeather(city) {
  // store city specific url
  const url = `${ROOT_URL}&q=${city},us`;
  // get request returns a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    // returning the promise as the payload
    // redux promise will stop action and return resolved promise
    payload: request
  };
}