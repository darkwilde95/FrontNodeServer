import React, { Component } from 'react'

// Assets
import Store from '../js/store'
import { logout } from '../js/actions'

// Components
import { Link } from 'react-router-dom'

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      authed: Store.getState().session
    }
  }

  componentDidMount(){
    Store.subscribe(() => {
      this.setState({ authed: Store.getState().session })
    })
  }

  handleClick(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    Store.dispatch(logout())
  }

  render() {
    const { authed } = this.state
    const auxMargin = { marginRight: 8 }
    const noPadding = { padding: 0 }
    const homeDashboard = (
      <Link className="navbar-brand logo" style={ noPadding } to="/dashboard">
        <span className='brand-logo-big logo'>:v</span> UNfail
      </Link>
    )
    const homeLanding = (
      <Link className="navbar-brand logo" style={ noPadding } to="/">
        <span className='brand-logo-big logo'>:v</span> UNfail
      </Link>
    )
    const notlogged = (
      <div className='justify-content-end'>
        <Link className="btn btn-outline-light" style={ auxMargin }
          to='/signin'>Sign In</Link>
        <Link className="btn btn-outline-light" to='/signup'>Sign Up</Link>
      </div>
    )
    const logged = (
      <div className='justify-content-end'>
        <button className="btn btn-outline-light"
          onClick={ (e) => this.handleClick(e) }>
            Log out
        </button>
      </div>
    )
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          { (authed) ? homeDashboard : homeLanding }
          { (authed) ? logged : notlogged }
        </nav>
      </header>
    )
  }
}
