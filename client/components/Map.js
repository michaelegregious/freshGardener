import React from 'react'
import MyMapComponent from './MyMapComponent'
import {dummyTrees, newMarker} from './dummyTrees'
import {idText} from 'typescript'

class Map extends React.Component {
  state = {
    markers: dummyTrees || []
  }

  removeMarker = id => {
    this.setState({
      markers: this.state.markers.filter(m => m.id != id)
    })
  }

  handleMapClick = evt => {
    console.log('You Clicked!', evt.latLng.lat(), evt.latLng.lng())
    const lat = evt.latLng.lat()
    const lng = evt.latLng.lng()
    this.setState({
      markers: [
        ...this.state.markers,
        {...newMarker, id: this.state.markers.length + 1, latLng: {lat, lng}}
      ]
    })
  }

  render() {
    return (
      <div>
        <MyMapComponent
          removeMarker={this.removeMarker}
          markers={this.state.markers}
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
export default Map
