import React, { Component } from 'react'

// Assets
import Store from '../js/store'
import { post } from '../js/request'
import { login } from '../js/actions'
import bgSignup from '../assets/bg-signup.jpg'

export default class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggingIn: false
    }
  }

  componentDidMount() {
    document.title = 'Sign Up'
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({ loggingIn: true })
    const userInfo = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      password_confirmation: document.getElementById('password_confirmation').value
    }
    post('/users', userInfo).then((res) => {
      console.log(res.data)
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
        <img src={ bgSignup } className='bg-landing' alt='bg' style={ display }/>
        <div className='all-center'>
          <div className="card border-light transparent" style={ cardWidth }>
            <div className="card-body">
              <form onSubmit={ (e) => this.handleSubmit(e) }>
                <div className='form-group'>
                  <h5 className="card-title text-white text-center">
                    <b>Sign Up</b>
                  </h5>
                  <label htmlFor='username' className='text-white'>
                    Username
                  </label>
                  <input type='text' placeholder='Choose an username'
                    id='username' className='form-control border-light' />
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='text-white'>Email</label>
                  <input type='text' id='email' placeholder='Type an email'
                    className='form-control border-light' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password' className='text-white'>
                    Password
                  </label>
                  <input type='password' className='form-control border-light'
                    id='password' placeholder='Choose a password'/>
                </div>
                <div className='form-group'>
                  <label htmlFor='password_confirmation' className='text-white'>
                    Confirm password
                  </label>
                  <input type='password' id='password_confirmation'
                    className='form-control border-light'
                    placeholder='Type your password again' />
                </div>
                <div className='text-center'>
                  <button className='btn btn-outline-light'>Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
