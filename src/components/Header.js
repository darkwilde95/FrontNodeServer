import React, {Component} from 'react'

// Components
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand logo" href="/">:v UNfail</a>
          <div className='justify-content-end'>
            <Link className="btn btn-outline-light mr-sm-2"
              to='/signin'>Sign In</Link>
            <Link className="btn btn-outline-light" to='/signup'>Sign Up</Link>
          </div>
        </nav>
      </header>
    )
  }
}
