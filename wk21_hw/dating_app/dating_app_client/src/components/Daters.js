import React, { Component } from 'react';

class Daters extends Component {
    state = {
        daters: []
    }
    componentDidMount(){
        this.getDaters()
    }
    
    getDaters () {
        fetch('http://localhost:3000/users')
        .then((response) => response.json())
        .then( jsonDaters => this.setState({daters: jsonDaters}))
    }
    render() {
        return (
          <>
          <div className="left">
            {this.state.daters.filter((dater, index) => (index < 3))
            .map((dater, index) => {
              return (
                <div className="dater" key={dater.id}>
                 <img src={dater.img} alt={dater.name}/>
                  <div><h3>Name: {dater.name} </h3>
                  <h4>Starsign: {dater.starsign} </h4>
                  <h4>Age: {dater.age} </h4>
                  {dater.ltl
                    ? <h5> Loves to laugh and have a good time</h5>
                    : <h5> Hates laughing, does not like having a good time</h5>
                  }
                    </div>
                  </div>
                
              )
            })}
          </div>

          <main className="center">Let's make a match!</main>

<div className="right">
{this.state.daters.filter((dater, index) => (index > 2))
.map((dater, index) => {
  return (
    <div className="dater" key={dater.id}>
     <img src={dater.img} alt={dater.name}/>
      <div><h3>Name: {dater.name} </h3>
      <h4>Starsign: {dater.starsign} </h4>
      <h4>Age: {dater.age} </h4>
      {dater.ltl
        ? <h5> Loves to laugh and have a good time</h5>
        : <h5> Hates laughing, does not like having a good time</h5>
      }
        </div>
      </div>
    
  )
})}
</div>
</>
        )
    }
}

export default Daters