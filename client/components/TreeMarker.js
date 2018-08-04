import React from 'react'
import {Marker, InfoWindow} from 'react-google-maps'

class TreeMarker extends React.Component {
  state = {open: false}

  handleMarkerClick = () => {
    this.setState({open: !this.state.open})
  }

  closeInfo = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {marker} = this.props
    const {name, aliases, latLng, fruitsIn, imgUrl} = marker

    return (
      <Marker
        title={name}
        position={latLng}
        icon="/apple.png"
        onClick={this.handleMarkerClick}
      >
        {this.state.open && (
          <InfoWindow onCloseClick={this.closeInfo}>
            <div className="info">
              <h1>{name}</h1>
              {aliases[0] && <h5>aka {aliases.join(', ')}</h5>}
              {fruitsIn[0] && <h5>Fruits from {fruitsIn}</h5>}
              <img src={imgUrl} />
              <button type="button">{name ? 'Edit' : 'Add Fruit Tree'}</button>
            </div>
          </InfoWindow>
        )}
      </Marker>
    )
  }
}

export default TreeMarker
