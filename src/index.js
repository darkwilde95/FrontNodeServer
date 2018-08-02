import React from 'react'
import ReactDOM from 'react-dom'

//Assets
import './styles/App.css'
import 'animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './js/registerServiceWorker'

// Components
import RoutesBuilder from './components/RoutesBuilder'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><RoutesBuilder /></Router>, document.getElementById('root'))
registerServiceWorker()
