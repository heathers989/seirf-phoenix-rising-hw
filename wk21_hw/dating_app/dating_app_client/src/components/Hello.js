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
        .then( users => console.log(users))
    }
    render() {
        return (
            <h1>Hello Dating World</h1>
        )
    }
}

export default Daters