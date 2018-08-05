import React from 'react'
import {Marker, InfoWindow} from 'react-google-maps'
import TreeForm from './TreeForm'

class TreeMarker extends React.Component {
  state = {
    open: false,
    form: false
  }

  handleMarkerClick = () => {
    this.setState({open: !this.state.open})
  }

  closeInfo = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const {marker, removeMarker} = this.props
    const {id, name, aliases, latLng, fruitsIn, imgUrl} = marker

    return (
      <Marker
        title={name}
        position={latLng}
        icon="/apple.png"
        onClick={this.handleMarkerClick}
      >
        {this.state.open && (
          <TreeForm closeInfo={this.closeInfo} />
          // <InfoWindow onCloseClick={this.closeInfo}>
          //   <div className="info">
          //     <h1>{name}</h1>
          //     {aliases[0] && <h5>aka {aliases.join(', ')}</h5>}
          //     {fruitsIn[0] && <h5>Fruits from {fruitsIn}</h5>}
          //     <img src={imgUrl} />
          //     <button type="button">{name ? 'Edit' : 'Add Fruit Tree'}</button>
          //     <button onClick={() => removeMarker(id)} type="button">
          //       Remove
          //     </button>
          //   </div>
          // </InfoWindow>
        )}
      </Marker>
    )
  }
}

export default TreeMarker
