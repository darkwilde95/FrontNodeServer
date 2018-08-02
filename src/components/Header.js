import React, {Component} from 'react'

// Components
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const auxMargin = { marginRight: 8 }
    const noPadding = { padding: 0 }
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand logo" style={ noPadding } to="/">
            <span className='brand-logo-big logo'>:v</span> UNfail
          </Link>
          <div className='justify-content-end'>
            <Link className="btn btn-outline-light" style={ auxMargin }
              to='/signin'>Sign In</Link>
            <Link className="btn btn-outline-light" to='/signup'>Sign Up</Link>
          </div>
        </nav>
      </header>
    )
  }
}
