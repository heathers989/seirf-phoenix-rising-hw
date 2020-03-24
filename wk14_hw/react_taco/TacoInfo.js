class TacoInfo extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div className="taco">
          <h1 className="shell">Shell: {this.props.taco.shell.name}</h1>
          <p> {this.props.taco.shell.recipe}</p>
          <h2>Mixin': {this.props.taco.mixin.name} </h2>
          <p>{this.props.taco.mixin.recipe}</p>
          <h3>Condiment: {this.props.taco.condiment.name} </h3>
          <p>{this.props.taco.condiment.recipe}</p>
        </div>
      );
    }
  }