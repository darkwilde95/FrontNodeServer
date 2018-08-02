import React, { Component } from 'react'

export default class Landing extends Component {

  componentDidMount() {
    document.title = 'UNfail'
  }
  render() {
    return (
      <div className='bg-landing full-size'>
        <div className='all-center text-center'>
          <h1 className="display-1 logo text-white animated bounceInDown">
            UNfail :v
          </h1>
          <h2 className='animated fadeIn delay-1 text-white'>Es una mini app de login :3</h2>
        </div>
      </div>
    )
  }
}
