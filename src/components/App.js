import React, { Component } from 'react'

// Assets
// import axios from 'axios'

// components
import Header from './Header'

export default class App extends Component {

  componentDidMount() {
    // Verificar si hay un token
    if (!localStorage.getItem('token')) {

    } else {
      //Verificar si es válido

    }
  }

  render() {
    const { children } = this.props
    return (
      <div className='full-size'>
        <Header />
        <main>
          { children }
        </main>
      </div>
    )
  }
}
