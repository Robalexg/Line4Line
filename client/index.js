import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/components/app'
require('./public/styles/main.css')
require('./public/styles/lobby.css')
require('./public/styles/signup.css')
require('./public/styles/navbar.css')
require('./public/styles/endgame.css')

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
