import React from 'react'

class NewForm extends React.Component {
        state = {
            name: '',
            breed: '',
            species: ''
        }

        handleSubmit = (event) => {
            event.preventDefault()
            //send the data to the server
            fetch(this.props.baseURL + '/animals', {
                method: 'POST',
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
                this.props.handleAddAnimal(resJson)
                this.setState({name: '', species: '', breed: ''})
            }).catch (error => console.error({'Error': error}))
        }
        
        handleChange = (event) => {
            this.setState({[event.target.id]: event.target.value})
        }
    render(){
        return (
    <div>
  <form onSubmit={this.handleSubmit}>
  <label htmlFor="name"></label>
  <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="name"/>
  <input type="text" id="species" name="species" onChange={this.handleChange} value={this.state.species} placeholder="species"/>
  <input type="text" id="breed" name="breed" onChange={this.handleChange} value={this.state.breed} placeholder="breed"/>
  <input type="submit" value="Add an Animal"/>
</form>
<br/>
    </div>
        )
    }
    
}

export default NewForm