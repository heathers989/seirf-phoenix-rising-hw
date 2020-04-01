import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css'
import NewForm from './components/NewForm';
import UpdateForm from './components/UpdateForm'

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

fetch(baseURL+ '/animals')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class App extends React.Component {
      state = {
        animals: []
      }

      getAnimals = () => {
        fetch(baseURL + '/animals')
        .then(data => {
          return data.json()},
          err => console.log(err))
          .then(parsedData => this.setState({
            animals: parsedData
          }),
          err => console.log(err))
        }
      
      getAnimal = (animal) => {
        this.setState({animal})
      }

      handleAddAnimal = (animal) => {
          const copyAnimals = [...this.state.animals]
          copyAnimals.unshift(animal)
          this.setState({
            animals: copyAnimals,
            name: '',
            species: '',
            breed: ''
          })
      }

      handleEditAnimal = (animal) => {
        console.log(animal)
        }
    

      deleteAnimal = (id) => {
        fetch(baseURL + '/animals/' + id, {
          method: 'DELETE'
        }).then ( res => {
          //holidays Arr = [{}, {}]
          const animalsArr = this.state.animals.filter( animal => {
            return animal._id !== id
          })
          this.setState({animals: animalsArr})
        })
      }

      toggleAdopted = (animal) => {
        fetch(baseURL + '/animals/' + animal._id, {
          method: 'PUT',
          body: JSON.stringify({adopted: !animal.adopted}),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json())
        .then(resJson => {
             const copyAnimals = [...this.state.animals]
              const findIndex = this.state.animals.findIndex(animal => animal._id === resJson._id)
              copyAnimals[findIndex].adopted = resJson.adopted
              this.setState({animals: copyAnimals})
              console.log('adoption status for', animal.name, animal.adopted)
        })
      }
      
    render(){
    return (
    <div className="container">
      <h1>Sunny Philadelphia Animal Shelter</h1>
      <NewForm baseURL={baseURL} handleAddAnimal={this.handleAddAnimal} />
        {this.state.animals.map(animal =>
         <div key={animal._id}>
         <div>{animal.name } 
         <button onClick={() => {this.toggleAdopted(animal)}}>Pending Adoption</button> <button onClick={() => this.deleteAnimal(animal._id)}>Officially Adopted</button>
         <button onClick={() => {this.getAnimal(animal)} }>Edit</button>
         </div>
       </div>
        )}
          {this.state.animal ? <UpdateForm baseURL={baseURL}animal={this.state.animal} handleEditAnimal={this.handleEditAnimal}/>: null}
       </div>
  );
}

componentDidMount(){
  this.getAnimals()
}

}

export default App;
