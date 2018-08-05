import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {removeMarker} from '../store'

let TreeForm = props => {
  const {handleSubmit, pristine, submitting, markerId} = props

  return (
    <div className="info container">
      <h1>Add a Fruit Tree!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <Field className="field" name="name" component="input" type="text" />
          <label htmlFor="title">Name</label>
        </div>
        <div className="input-field">
          <Field
            className="field"
            name="fruitsIn"
            component="input"
            type="text"
          />
          <label htmlFor="title">Fruiting Period</label>
        </div>
        <div className="input-field">
          <Field
            className="field"
            name="imgUrl"
            component="input"
            type="text"
          />
          <label htmlFor="title">Picture</label>
        </div>
        <button
          className="field"
          disabled={pristine || submitting}
          type="submit"
        >
          Add a Tree
        </button>
      </form>
      <button
        className="field"
        onClick={() => props.removeMarker(markerId)}
        type="button"
      >
        Remove
      </button>
    </div>
  )
}

const mapState = (state, ownProps) => ({
  initialValues: state.markers[ownProps.markerId]
})

const mapDispatch = dispatch => {
  return {
    removeMarker: id => dispatch(removeMarker(id))
  }
}

TreeForm = reduxForm({form: 'treeForm'})(TreeForm)
TreeForm = connect(mapState, mapDispatch)(TreeForm)

export default TreeForm
