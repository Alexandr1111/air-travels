// import data from '../../mocks/flights';
const GET_DATA = 'GET-DATA';

// console.log('d: ', data)

const initialState = {
  data: true
};

const mainReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        val: action.val
      };
    // case TRANSFER:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}

// export const getDataCreator = val => ({ type: GET_DATA, val });

export default mainReducer;

