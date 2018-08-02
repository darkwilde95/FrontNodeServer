import React, { Component } from 'react'
import $ from 'jquery'

import bgLanding from '../assets/bg-landing.jpg'

export default class Landing extends Component {

  componentDidMount() {
    document.title = 'UNfail'
  }

  handleLoad(event) {
    $('.bg-landing').css('display','block')
    $('.paused').removeClass('paused')
  }

  render() {
    const style = { minHeight: 350, position: 'relative' }
    return (
      <div className='full-size' style={ style }>
        <img src={ bgLanding } className='bg-landing' alt='bg'
          onLoad={ (e) => this.handleLoad(e) } />
        <div className='all-center text-center'>
          <h1 className='super-big logo text-white animated paused bounceInDown'>
            :v
          </h1>
          <h1 className="display-2 logo text-white delay-1 animated paused fadeIn">
            UNfail
          </h1>
          <h3 className='delay-1 animated paused fadeIn text-white'>
            Es una mini app de login :3
          </h3>
        </div>
      </div>
    )
  }
}
