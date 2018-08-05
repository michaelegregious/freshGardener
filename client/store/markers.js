import {dummyTrees} from '../components/dummyTrees'

//ACTION TYPES
const GET_MARKERS = 'GET_MARKERS'
const REMOVE_MARKER = 'REMOVE_MARKER'
const ADD_MARKER = 'ADD_MARKER'

//INITIAL STATE
const defaultMarkers = dummyTrees || []

//ACTION CREATORS
export const getMarkers = () => ({
  type: GET_MARKERS,
  markers: dummyTrees
})

export const addMarker = marker => ({
  type: ADD_MARKER,
  marker
})

export const removeMarker = id => ({
  type: REMOVE_MARKER,
  id
})

//REDUCER
export default function(state = defaultMarkers, action) {
  switch (action.type) {
    case GET_MARKERS:
      return action.markers
    case ADD_MARKER:
      return [...state, action.marker]
    case REMOVE_MARKER:
      return state.filter(m => m != m[action.id])
    default:
      return state
  }
}
