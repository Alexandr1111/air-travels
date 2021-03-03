import * as data from '../../mocks/flights';
const SWITCH_BY_PRICE = 'SWITCH-BY-PRICE';
const TRANSFER = 'TRANSFER';

console.log('d: ', data)

const initialState = data;

const mainReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SWITCH_BY_PRICE:
      return {
        ...state
      };
    case TRANSFER:
      return {
        ...state
      };
    default:
      return state;
  }
}

const switchByPriceCreator = val => {
  return {
    type: SWITCH_BY_PRICE,
    val: val
  }
}

export default mainReducer;

