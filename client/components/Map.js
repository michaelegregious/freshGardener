import React from 'react'
import MyMapComponent from './MyMapComponent'
import {connect} from 'react-redux'
import {addMarker, removeMarker} from '../store'

class Map extends React.Component {
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
  console.log('STATE', state)
  return {
    markers: state.markers
  }
}

const mapDispatch = dispatch => {
  return {
    addMarker: () => dispatch(addMarker()),
    removeMarker: () => dispatch(removeMarker())
  }
}

export default connect(mapState)(Map)
