import React from 'react'

class UpdateForm extends React.Component {
  state = {
    name: '',
    breed: '',
    species: ''
}

handleSubmit = (event) => {
    // event.preventDefault()
    //send the data to the server
    fetch(this.props.baseURL + '/animals/' + this.props.animal._id, {
        method: 'PUT',
        body: JSON.stringify({
            name: this.state.name,
            species: this.state.species,
            breed: this.state.breed
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    //the server then responds with json
    .then (res => res.json())
    .then (resJson => {
        //add the received data to state in app
        this.props.handleEditAnimal(resJson)
        this.setState({name: '', species: '', breed: ''})
    }).catch (error => console.error({'Error': error}))
}

handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
}
  render () {
    return (
      <div className="modal edit">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              defaultValue={this.props.animal.name}
              onChange={this.handleChange}
            />
            <label htmlFor="species">Species</label>
            <input
              type="text"
              id="species"
              defaultValue={this.props.animal.species}
              onChange={this.handleChange}
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              id="breed"
              defaultValue={this.props.animal.breed}
              onChange={this.handleChange}
            />
            <input type="submit" value="Update Animal" className="button-primary" />
            <button className="button-red"> Don't Update </button>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm
