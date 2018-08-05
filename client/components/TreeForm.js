import React from 'react'
import {connect} from 'react-redux'
import {InfoWindow} from 'react-google-maps'
import {removeMarker} from '../store'

class TreeForm extends React.Component {
  state = {}

  handleChange(evt) {
    this.setState({value: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log('Submitted!', evt)
  }

  render() {
    const id = this.props.markerId
    return (
      <div className="info">
        <h1>Add a Fruit Tree!</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Fruiting Months:
            <input type="text" name="fruitsIn" />
          </label>
          <label>
            Picture:
            <input type="text" name="imgUrl" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => this.props.removeMarker(id)} type="button">
          Remove
        </button>
      </div>
    )
  }
}

const mapState = state => ({})

const mapDispatch = dispatch => {
  return {
    removeMarker: id => dispatch(removeMarker(id))
  }
}

export default connect(mapState, mapDispatch)(TreeForm)
