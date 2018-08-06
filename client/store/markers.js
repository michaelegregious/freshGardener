import {dummyTrees, newMarker} from '../components/dummyTrees'

//ACTION TYPES
const GET_MARKERS = 'GET_MARKERS'
const REMOVE_MARKER = 'REMOVE_MARKER'
const ADD_MARKER = 'ADD_MARKER'
const EDIT_MARKER = 'EDIT_MARKER'

//INITIAL STATE
const defaultMarkers = dummyTrees || []
const defaultMarker = newMarker

//ACTION CREATORS
export const getMarkers = () => ({
  type: GET_MARKERS,
  markers: dummyTrees
})

export const addMarker = latLng => {
  return {
    type: ADD_MARKER,
    marker: {...defaultMarker, latLng}
  }
}

export const editMarker = marker => {
  return {
    type: EDIT_MARKER,
    marker
  }
}

export const removeMarker = id => {
  return {
    type: REMOVE_MARKER,
    id
  }
}

//REDUCER
export default function(state = defaultMarkers, action) {
  switch (action.type) {
    case GET_MARKERS:
      return action.markers
    case ADD_MARKER:
      return {
        ...state,
        [Math.max(...Object.values(state).map(m => m.id)) + 1]: {
          id: Math.max(...Object.values(state).map(m => m.id)) + 1,
          ...action.marker
        }
      }
    case EDIT_MARKER:
      return {...state, [action.marker.id]: action.marker}
    case REMOVE_MARKER:
      return Object.values(state).reduce((result, m) => {
        if (m.id != action.id) result[m.id] = m
        return result
      }, {})
    default:
      return state
  }
}

//SELECTORS
export const getAllMarkers = state => {
  return Object.values(state.markers)
}
