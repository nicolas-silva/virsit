import { ACTIONS } from "../constants/constants";

export const selectViewMode = (viewType) => ({
  type: ACTIONS.SELECT_VIEW_MODE,
  viewType,
});
export const selectFilter = (filter) => ({
  type: ACTIONS.SELECT_FILTER,
  filter,
});
export const chooseLanguage = (language) => ({
  type: ACTIONS.CHOOSE_LANGUAGE,
  language,
});
export const openEvent = (event) => ({
  type: ACTIONS.OPEN_EVENT,
  event,
});
export const closeEvent = () => ({
  type: ACTIONS.CLOSE_EVENT,
});
export const filterOn = () => ({
  type: ACTIONS.FILTER_ON,
});
export const filterOff = () => ({
  type: ACTIONS.FILTER_OFF,
});
export const searchFor = (text) => ({
  type: ACTIONS.SEARCH_FOR,
  text,
});
export const setSearchField = (text) => ({
  type: ACTIONS.SET_SEARCH_FIELD,
  text,
});
export const setFilteredPlaces = (places) => ({
  type: ACTIONS.SET_PLACES,
  places,
});
