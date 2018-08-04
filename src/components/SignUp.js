import React, { Component } from 'react'

// Assets
import bgSignup from '../assets/bg-signup.jpg'

export default class SignUp extends Component {

  componentDidMount() {
    document.title = 'Sign Up'
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
              <form>
                <div className='form-group'>
                  <h5 className="card-title text-white text-center"><b>Sign Up</b></h5>
                  <label htmlFor='username' className='text-white'>Username</label>
                  <input type='text' id='username' name='username'
                    className='form-control border-light' placeholder='Choose an username' />
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='text-white'>Email</label>
                  <input type='text' id='email' name='email'
                    className='form-control border-light' placeholder='Type an email' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password_digest' className='text-white'>Password</label>
                  <input type='password' id='password_digest' name='password_digest'
                    className='form-control border-light' placeholder='Choose a password' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password_confirmation' className='text-white'>Confirm password</label>
                  <input type='password' id='password_confirmation' name='password_confirmation'
                    className='form-control border-light' placeholder='Type your password again' />
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
