import React from 'react'
import {connect} from 'react-redux'
import {withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps'
import {getAllMarkers} from '../store'
import {TreeMarker} from '../components'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{lat: 41.84832970000001, lng: -87.69956060000004}}
      defaultZoom={18}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <TreeMarker key={marker.id} marker={marker} />
      ))}
    </GoogleMap>
  ))
)

const mapState = state => ({
  markers: getAllMarkers(state)
})

export default connect(mapState)(MyMapComponent)
