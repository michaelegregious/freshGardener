import React from 'react'
import {Marker, InfoWindow} from 'react-google-maps'
import {connect} from 'react-redux'
import {removeMarker, editMarker} from '../store'
import TreeForm from './TreeForm'

class TreeMarker extends React.Component {
  state = {
    openInfo: false,
    displayForm: false
  }

  toggleForm = () => {
    this.setState({displayForm: !this.state.displayForm})
  }

  submit = marker => {
    this.props.editMarker(marker)
    this.setState({displayForm: false})
  }

  handleMarkerClick = () => {
    this.setState({openInfo: !this.state.openInfo})
  }

  closeInfo = () => {
    this.setState({
      openInfo: !this.state.openInfo
    })
  }

  render() {
    const {id, name, aliases, latLng, fruitsIn, imgUrl} = this.props.marker
    return (
      <Marker
        title={name}
        position={latLng}
        icon="/apple.png"
        onClick={this.handleMarkerClick}
      >
        {this.state.openInfo && (
          <InfoWindow onCloseClick={this.closeInfo}>
            {this.state.displayForm || !name ? (
              <TreeForm markerId={id} onSubmit={this.submit} />
            ) : (
              <div className="info">
                <h1>{name}</h1>
                {aliases[0] && <h5>aka {aliases.join(', ')}</h5>}
                {fruitsIn[0] && <h5>Fruits from {fruitsIn}</h5>}
                <img className="tree" src={imgUrl} />
                <button type="button" onClick={() => this.toggleForm()}>
                  {name ? 'Edit' : 'Add Fruit Tree'}
                </button>
                <button
                  onClick={() => this.props.removeMarker(id)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            )}
          </InfoWindow>
        )}
      </Marker>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => {
  return {
    removeMarker: id => dispatch(removeMarker(id)),
    editMarker: marker => dispatch(editMarker(marker))
  }
}

export default connect(mapState, mapDispatch)(TreeMarker)
