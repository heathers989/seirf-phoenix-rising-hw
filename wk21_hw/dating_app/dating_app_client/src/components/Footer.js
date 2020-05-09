import React from 'react'
import Form from './Form.js'

function Footer(props) {
    return (
      <footer>
        <h1>Add New Dater</h1>
        <Form handleSubmit={props.handleSubmit}/>
      </footer>
    )
}

export default Footer
