import React, { Component } from 'react'

// Assets
import Store from '../js/store'
import { post } from '../js/request'
import { login } from '../js/actions'
import bgSignin from '../assets/bg-signin.jpg'

export default class SignIn extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggingIn: false
    }
  }

  componentDidMount() {
    document.title = 'Sign In'
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ loggingIn: true })
    const credentials = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    }
    post('/login', credentials).then((res) => {
      localStorage.setItem('token', res.data.jwt)
      Store.dispatch(login())
    }).catch((error) => {
      console.log(error)
      this.setState({ loggingIn: false })
    })
  }

  render() {
    const style = { minHeight: 500, position: 'relative' }
    const cardWidth = { width: 300 }
    const display = { display: 'block' }
    return (
      <div className='full-size' style={ style }>
        <div className='gradient-inv'></div>
        <img src={ bgSignin } className='bg-landing' alt='bg' style={ display }/>
        <div className='all-center'>
          <h1 className='text-center logo text-white signin-logo'>
            :v
          </h1>
          <div className="card border-light transparent" style={ cardWidth }>
            <div className="card-body">
              <h5 className="card-title text-white text-center">
                <b>Sign In</b>
              </h5>
              <form onSubmit={ (e) => this.handleSubmit(e) }>
                <div className='form-group'>
                  <label htmlFor='email' className='text-white'>Email</label>
                  <input type='text' id='email' placeholder='Type your email'
                    className='form-control border-light'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='password' className='text-white'>
                    Password
                  </label>
                  <input type='password' placeholder='Type your password'
                    id='password' className='form-control border-light' />
                </div>
                <div className='text-center'>
                  <button className='btn btn-outline-light'>Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
