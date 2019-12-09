import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from '@aws-amplify/core'
import awsConfig from './awsConfig'
import './styles/index.css'
import App from './components/App'

Amplify.configure(awsConfig)
Amplify.Logger.LOG_LEVEL = 'INFO'

ReactDOM.render(<App />, document.getElementById('root'))
