class DivThree extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
       <h3 onClick={() => this.props.changeIt(this.props.tardis.name)}>{this.props.tardis.name}</h3>
      </div>
      <div>
       <h3 onClick={() => this.props.changeItDupe(this.props.tardisDupe.name)}>{this.props.tardisDupe.name}</h3>

      </div>
      </React.Fragment>
    );
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree changeItDupe={this.props.changeItDupe} tardisDupe={this.props.tardisDupe} changeIt={this.props.changeIt} tardis={this.props.tardis} />
        {/* <h3 onClick={() => this.props.changeItDupe(this.props.tardisDupe.name)}>{this.props.tardisDupe.name}</h3> */}
      </div>
    );
  }
}

class DivOne extends React.Component {

    render () {
        return(
            <div>
              <DivTwo changeIt={this.props.changeIt}
                      tardis={this.props.tardis} changeItDupe={this.props.changeItDupe} tardisDupe={this.props.tardisDupe} />
                {/* <h3 onClick={() => this.props.changeItDupe(this.props.tardisDupe.name)}>{this.props.tardisDupe.name}</h3> */}
            </div>
        )
    }
}


class App extends React.Component {

    state = {
        tardis: {
            name: 'Time and Relative Dimension in Space',
            caps: false
        },
        tardisDupe: {
          name: 'Time and Relative Dimension in Space',
          caps: false
        }
    }

    changeIt = (text) => {
        console.log(text)
        if (this.state.tardis.caps) {
            this.setState({
              tardis: {
                name: text.toLowerCase(),
                caps: false
              }
            })
          } else {
            this.setState({
              tardis: {
                name: text.toUpperCase(),
                caps: true
              }
            })
          }
    }

    changeItDupe = (text) => {
      // console.log(text)
      if (this.state.tardisDupe.caps) {
          this.setState({
            tardisDupe: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardisDupe: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
  }
    render () {
        return (
         <React.Fragment>
             <div>
             {/* <h3 onClick={() => this.changeIt(this.props.tardis.name)}>{this.props.tardis.name}</h3> */}

                 <DivOne changeIt={this.changeIt}
                         tardis={this.state.tardis}
                         changeItDupe={this.changeItDupe}
                         tardisDupe={this.state.tardisDupe} />
                 </div>
                 
         </React.Fragment>
            )
    }
    
}

   ReactDOM.render(
    <App />,
    document.querySelector('.container')
)