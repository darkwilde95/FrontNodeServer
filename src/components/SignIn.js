import React, { Component } from 'react'

// Assets
import bgSignin from '../assets/bg-signin.jpg'

export default class SignIn extends Component {

  componentDidMount() {
    document.title = 'Sign In'
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
              <h5 className="card-title text-white text-center"><b>Sign In</b></h5>
              <form>
                <div className='form-group'>
                  <label htmlFor='email' className='text-white'>Email</label>
                  <input type='text' id='email' name='email'
                    className='form-control border-light' placeholder='Type your email' />
                </div>
                <div className='form-group'>
                  <label htmlFor='password' className='text-white'>Password</label>
                  <input type='password' id='password' name='password'
                    className='form-control border-light' placeholder='Type your password' />
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
