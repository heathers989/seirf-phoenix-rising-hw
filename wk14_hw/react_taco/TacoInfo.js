class TacoInfo extends React.Component {
    render() {
      console.log(this.props);
      return (
        <div>
          <h1>Shell: {this.props.taco.shell.name}</h1>
          <h2>Mixin': {this.props.taco.mixin.name} </h2>
          <h3>Condiment: {this.props.taco.condiment.name} </h3>
        </div>
      );
    }
  }