import React, { Component } from 'react'

// Assets
import Store from '../js/store'
import { authed_get } from '../js/request'
import { login, logout } from '../js/actions'

// Components
import Header from './Header'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      authed_get('/validate_token').then((res) => {
        if (res.data.valid) {
          Store.dispatch(login())
        } else {
          Store.dispatch(logout())
          localStorage.removeItem('token')
        }
        this.setState({ isLoaded: true })
      }).catch((error) => {
        console.log(error)
      })
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
