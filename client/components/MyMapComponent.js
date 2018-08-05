import React from 'react'
import {connect} from 'react-redux'
import {withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps'

import TreeMarker from './TreeMarker'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{lat: 41.84832970000001, lng: -87.69956060000004}}
      defaultZoom={18}
      onClick={props.onMapClick}
    >
      {console.log('props.markers!', props.markers)}
      {props.markers.map(marker => (
        <TreeMarker
          key={marker.id}
          marker={marker}
          onMarkerClick={props.onMarkerClick}
          // removeMarker={props.removeMarker}
        />
      ))}
    </GoogleMap>
  ))
)

const mapState = state => {
  console.log('Markers', state.markers)
  return {
    markers: state.markers
  }
}

const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(MyMapComponent)
