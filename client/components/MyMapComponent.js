import React from 'react'
import {withGoogleMap, GoogleMap, withScriptjs} from 'react-google-maps'
import TreeMarker from './TreeMarker'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{lat: 41.84832970000001, lng: -87.69956060000004}}
      defaultZoom={18}
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <TreeMarker
          key={marker.id}
          marker={marker}
          onMarkerClick={props.onMarkerClick}
        />
      ))}
    </GoogleMap>
  ))
)

export default MyMapComponent
