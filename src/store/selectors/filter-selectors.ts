import {createSelector} from "reselect";
import {AppStateType} from "../store";

export const getPriceUpActive = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.priceUpActive;
}

export const getTravelTimeUpActive = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.travelTimeUpActive;
}

export const getPriceMin = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.priceMin;
}

export const getPriceMax = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.priceMax;
}

export const getCarriers = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.carriers;
}

export const getIsShowAll = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.isShowAll;
}

const dataArrSelector = (state: AppStateType) => {
  // @ts-ignore
  return state.filter.data;
}

export const getDataArr = createSelector(dataArrSelector, (data) => {
  return data.slice(0,5);
})
