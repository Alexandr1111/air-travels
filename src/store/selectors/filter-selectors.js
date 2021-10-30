import {createSelector} from "reselect";

export const getPriceUpActive = (state) => {
  return state.filter.priceUpActive;
}

export const getTravelTimeUpActive = (state) => {
  return state.filter.travelTimeUpActive;
}

export const getPriceMin = (state) => {
  return state.filter.priceMin;
}

export const getPriceMax = (state) => {
  return state.filter.priceMax;
}

export const getCarriers = (state) => {
  return state.filter.carriers;
}

export const getIsShowAll = (state) => {
  return state.filter.isShowAll;
}

const dataArrSelector = (state) => {
  return state.filter.data;
}

export const getDataArr = createSelector(dataArrSelector, (data) => {
  return data.slice(0,5);
})
