import data from '../../mocks/flights';
const SWITCH_BY_PRICE = 'SWITCH-BY-PRICE';
const SWITCH_BY_TRAVEL_TIME = 'SWITCH-BY-TRAVEL-TIME';
const SWITCH_BY_CARRIER = 'SWITCH-BY-CARRIER';
const INPUT_MIN_PRICE = 'INPUT-MIN-PRICE';
const INPUT_MAX_PRICE = 'INPUT-MAX-PRICE';

const initialState = {
  priceUpActive: true,
  travelTimeUpActive: false,
  priceMin: null,
  priceMax: null,
  carriers: [],
  data: data.result.flights
};

const filterReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SWITCH_BY_PRICE:
      return {
        ...state,
        priceUpActive: action.priceUpActive,
        travelTimeUpActive: false
      };
    case SWITCH_BY_TRAVEL_TIME:
      console.log('travelTimeUpActive :', action.travelTimeUpActive)
      return {
        ...state,
        priceUpActive: false,
        travelTimeUpActive: action.travelTimeUpActive
      };
    case INPUT_MIN_PRICE:
      console.log('priceValue :', action.price)
      return {
        ...state,
        priceMin: action.price
      };
    case INPUT_MAX_PRICE:
      console.log('priceValue :', action.price)
      return {
        ...state,
        priceMax: action.price
      };
    case SWITCH_BY_CARRIER:
      return {
        ...state,
        carriers: state.carriers.includes(action.carrier) ? state.carriers.filter(i => i !== action.carrier) : [...state.carriers, action.carrier]
      };
    default:
      return state;
  }
}

export const switchByPriceCreator = priceUpActive => ({ type: SWITCH_BY_PRICE, priceUpActive });

export const switchByTravelTimeCreator = travelTimeUpActive => ({ type: SWITCH_BY_TRAVEL_TIME, travelTimeUpActive });

export const inputMinPrice = price => ({ type: INPUT_MIN_PRICE, price });

export const inputMaxPrice = price => ({ type: INPUT_MAX_PRICE, price });

export const switchByCarrier = carrier => {
  console.log(carrier, 'carDis')
  return {type: SWITCH_BY_CARRIER, carrier }};


export default filterReducer;
