
class App extends React.Component {
  state = {
    tacoURL: "https://taco-randomizer.herokuapp.com/random/?full-tack=true"
  };

  makeApiCall = () => {
    this.setState(
      {
        tacoURL: this.state.tacoURL
      },
      () => {
        fetch(this.state.tacoURL)
          .then(response => response.json())
          .then(json =>
            this.setState({
              taco: json
            })
          );
      }
    );
  };
  render() {
    console.log("App - state", this.state.taco);
    return (
      <div className="App">
        <h1 onClick={this.makeApiCall}> <img src="https://assets3.thrillist.com/v1/image/2798454/size/gn-gift_guide_variable_c.jpg"></img> Click Me to Generate a Random Taco! <img src="https://assets3.thrillist.com/v1/image/2798454/size/gn-gift_guide_variable_c.jpg"></img></h1>
        {this.state.taco ? <TacoInfo taco={this.state.taco} /> : ""}
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.querySelector('.container')
)

