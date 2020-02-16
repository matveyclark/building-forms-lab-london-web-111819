// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = e => {
    return this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleChange} value={this.state.name} type="text" name="bandName"></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
