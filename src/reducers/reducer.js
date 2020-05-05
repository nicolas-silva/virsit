import { 
    ACTIONS,
    FILTERS,
    VIEW,
    LANGUAGES
} from '../constants/constants';
import spots from '../spots'

const initialState = {
    viewMode: VIEW.LIST,
    filter: FILTERS.ALL,
    filterActive: false,
    places: spots,
    filteredPlaces: spots,
    searchField: '',
    language: LANGUAGES.ENG,
    event: '',
    showEvent: false,
  }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.SELECT_VIEW_MODE:
      return Object.assign({}, state, {
        viewMode: action.viewType
      })
    case ACTIONS.SELECT_FILTER:
      return Object.assign({}, state, {
        filter: action.filter,
      })
    case ACTIONS.CHOOSE_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language
      })
    case ACTIONS.OPEN_EVENT:
      return Object.assign({}, state, {
        showEvent: true,
        event: action.event
      })
    case ACTIONS.CLOSE_EVENT:
      return Object.assign({}, state, {
        showEvent: false,
        event: ''
      })
    case ACTIONS.FILTER_ON:
      return Object.assign({}, state, {
        filterActive: true,
      })
    case ACTIONS.FILTER_OFF:
      return Object.assign({}, state, {
        filterActive: false,
      })
    case ACTIONS.SET_PLACES:
      return Object.assign({}, state, {
        filteredPlaces: action.places,
      })
    case ACTIONS.SEARCH_FOR:
      return Object.assign({}, state, {
        searchField: action.text,
      })
    case ACTIONS.SET_SEARCH_FIELD:
      return Object.assign({}, state, {
        searchField: action.text,
      })
    default:
      return state
  }
}