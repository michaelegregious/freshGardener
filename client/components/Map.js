import React from 'react'
import {withGoogleMap, GoogleMap, Marker, withScriptjs} from 'react-google-maps'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{lat: 41.84832970000001, lng: -87.69956060000004}}
      defaultZoom={18}
      onClick={props.onMapClick}
    >
      {props.isMarkerShown && (
        <Marker position={{lat: 41.84832970000001, lng: -87.69956060000004}} />
      )}
    </GoogleMap>
  ))
)

class Map extends React.Component {
  state = {
    markers: [],
    markerShown: false
  }

  render() {
    return (
      <div>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMVqyJoq46F5GGI08crYFcXG9bqoxCeH0"
          loadingElement={<div style={{height: `100%`}} />}
          isMarkerShown={this.state.markerShown}
          containerElement={<div style={{height: '100vw', width: '100vw'}} />}
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    )
  }
}
export default Map
