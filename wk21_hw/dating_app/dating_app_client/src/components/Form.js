import React from "react";
import Input from "./Input.js";

class Form extends React.Component {
  state = {
    name: "",
    starsign: "",
    age: "",
    img: "",
    ltl: ""
  };


  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleLtl = (value) => {
    if (value === "true") return true
    if (value === "false") return false
    return value
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const dater = {
      name: this.state.name,
      starsign: this.state.starsign,
      age: this.state.age,
      img: this.state.img,
      ltl: this.state.ltl
    }
    if (this.props.dater) dater.id = this.props.dater.id
    this.props.handleSubmit(
      event,
      dater
    )
  }

  componentDidMount() {
    if (this.props.dater) {
      const { name, starsign, age, img, ltl, id } = this.props.dater;
      this.setState({
        name: name || "",
        starsign: starsign || "",
        age: age || "",
        img: img || "",
        ltl: ltl || '',
        id: id || "",
      });
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"name"}
          placeholder={"Name"}
          type={"text"}
          value={this.state.name}
          id={"name"}
        />
        <Input
          handleChange={this.handleChange}
          name={"starsign"}
          placeholder={"Starsign"}
          type={"text"}
          value={this.state.starsign}
          id={"starsign"}
        />
        <Input
          handleChange={this.handleChange}
          name={"age"}
          placeholder={"Age"}
          type={"text"}
          value={this.state.age}
          id={"age"}
        />
        <Input
          handleChange={this.handleChange}
          name={"img"}
          placeholder={"img"}
          type={'text'}
          value={this.state.img}
          id={"img"}
        />
         <Input
          handleChange={this.handleChange}
          name={"ltl"}
          placeholder={"likes to laugh (true/false)"}
          type={'text'}
          value={this.handleLtl(this.state.ltl)}
          id={"img"}
        />
        <input type="submit" value={"add a dater"} />
      </form>
    );
  }
}
export default Form;
