import React from 'react'
import {InfoWindow} from 'react-google-maps'

class TreeForm extends React.Component {
  state = {}

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <InfoWindow onCloseClick={this.props.closeInfo}>
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
        </div>
      </InfoWindow>
    )
  }
}

export default TreeForm
