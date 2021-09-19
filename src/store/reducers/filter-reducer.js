import data from '../../mocks/flights';
const SWITCH_BY_PRICE = 'SWITCH-BY-PRICE';
const SWITCH_BY_TRAVEL_TIME = 'SWITCH-BY-TRAVEL-TIME';
const INPUT_MIN_PRICE = 'INPUT-MIN-PRICE';
const INPUT_MAX_PRICE = 'INPUT-MAX-PRICE';

const initialState = {
  priceUpActive: true,
  travelTimeUpActive: false,
  priceMin: null,
  priceMax: null,
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
    default:
      return state;
  }
}

export const switchByPriceCreator = priceUpActive => ({ type: SWITCH_BY_PRICE, priceUpActive });

export const switchByTravelTimeCreator = travelTimeUpActive => ({ type: SWITCH_BY_TRAVEL_TIME, travelTimeUpActive });

export const inputMinPrice = price => ({ type: INPUT_MIN_PRICE, price });

export const inputMaxPrice = price => ({ type: INPUT_MAX_PRICE, price });


export default filterReducer;
