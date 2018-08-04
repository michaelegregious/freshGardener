import React from 'react'
import MyMapComponent from './MyMapComponent'
import dummyTrees from './dummyTrees'

const newMarker = {
  id: 0,
  latLng: {lat: 0, lng: 0},
  name: '',
  aliases: [],
  fruitsIn: '',
  imgUrl: '',
  zone: 0
}

class Map extends React.Component {
  state = {
    markers: dummyTrees || [],
    markerSelected: false
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
