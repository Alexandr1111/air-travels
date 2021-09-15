import data from '../../mocks/flights';
const SWITCH_BY_PRICE = 'SWITCH-BY-PRICE';
const SWITCH_BY_TRAVEL_TIME = 'SWITCH-BY-TRAVEL-TIME';

const initialState = {
  priceUpActive: true,
  travelTimeUpActive: false,
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
    default:
      return state;
  }
}

export const switchByPriceCreator = priceUpActive => ({ type: SWITCH_BY_PRICE, priceUpActive });

export const switchByTravelTimeCreator = travelTimeUpActive => ({ type: SWITCH_BY_TRAVEL_TIME, travelTimeUpActive });

export default filterReducer;
