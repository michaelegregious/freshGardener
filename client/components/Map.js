import React from 'react'
import MyMapComponent from './MyMapComponent'
import {connect} from 'react-redux'
import {addMarker, removeMarker} from '../store'

class Map extends React.Component {
  handleMapClick = evt => {
    console.log('Map Clicked!', evt.latLng.lat(), evt.latLng.lng())
    this.props.addMarker({lat: evt.latLng.lat(), lng: evt.latLng.lng()})
  }

  render() {
    return (
      <div>
        <MyMapComponent
          markers={this.props.markers}
          onMapClick={this.handleMapClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMVqyJoq46F5GGI08crYFcXG9bqoxCeH0"
          loadingElement={<div style={{height: `100%`}} />}
          isMarkerShown={true}
          containerElement={<div style={{height: '100vw', width: '100vw'}} />}
          mapElement={<div style={{height: `100%`}} />}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    markers: state.markers
  }
}

const mapDispatch = dispatch => {
  return {
    addMarker: latLng => dispatch(addMarker(latLng))
  }
}

export default connect(mapState, mapDispatch)(Map)
