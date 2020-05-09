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
                 <div><h2>Name: {dater.name} </h2>
                <h2>Starsign: {dater.starsign} </h2>
                <h2>Age: {dater.age} </h2>
                {dater.ltl
                  ? <h3> Loves to laugh and have a good time</h3>
                  : <h3> Hates laughing, does not like having a good time</h3>
                }
                  </div>
                </div>
                
              )
            })}
          </div>

          <main className="center"><div>Let's make a match!</div>
          {/* nonfunctional placeholders */}
          <div className="datermid">Dater 1</div> <div className="datermid">Dater 2</div>
          <div><button>CLICK TO MATCH!</button></div>
          </main>

          <div className="right">
          {this.state.daters.filter((dater, index) => (index > 2))
          .map((dater, index) => {
            return (
              <div className="dater" key={dater.id}>
              <img src={dater.img} alt={dater.name}/>
                <div><h2>Name: {dater.name} </h2>
                <h2>Starsign: {dater.starsign} </h2>
                <h2>Age: {dater.age} </h2>
                {dater.ltl
                  ? <h3> Loves to laugh and have a good time</h3>
                  : <h3> Hates laughing, does not like having a good time</h3>
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