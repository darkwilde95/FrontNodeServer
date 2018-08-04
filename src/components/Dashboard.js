import React, { Component } from 'react'

// Assets
import { authed_get } from '../js/request'

export default class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      isLoaded: null
    }
  }

  componentDidMount() {
    authed_get('/dashboard').then((res) => {
      this.setState({
        user: res.data,
        isLoaded: true
      })
    })
  }

  render() {
    const { user, isLoaded } = this.state
    if (!isLoaded) {
      return (
        <div className='container'>
          <br /><br />
          <h1>Cargando...</h1>
        </div>
      )
    }
    return (
      <div className='container'>
        <br /><br />
        <h1>
          Hola { user.username }!
        </h1>
        <p>
          La miniapp, tanto en este frontend como en el backend, aun no tienen
          mucho trabajado, asi que no se sorprenda si encuentra problemas de
          carga o actualizaciones de la pagina. Por lo menos ya registra :'v.
        </p>
      </div>
    )
  }
}
