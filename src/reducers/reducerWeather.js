import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // create new array and add rest of state elements to it
    return [ action.payload.data, ...state ];
  }
  return state;
}