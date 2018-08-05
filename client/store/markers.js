import {dummyTrees, newMarker} from '../components/dummyTrees'

//ACTION TYPES
const GET_MARKERS = 'GET_MARKERS'
const REMOVE_MARKER = 'REMOVE_MARKER'
const ADD_MARKER = 'ADD_MARKER'

//INITIAL STATE
const defaultMarkers = dummyTrees || []
const defaultMarker = newMarker

//ACTION CREATORS
export const getMarkers = () => ({
  type: GET_MARKERS,
  markers: dummyTrees
})

export const addMarker = latLng => {
  console.log('latLng', latLng)
  return {
    type: ADD_MARKER,
    marker: {...defaultMarker, latLng}
  }
}

export const removeMarker = id => {
  console.log('inside remove marker', id)
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
      return [...state, {id: state.length + 1, ...action.marker}]
    case REMOVE_MARKER:
      return state.filter(m => m.id != action.id)
    default:
      return state
  }
}
