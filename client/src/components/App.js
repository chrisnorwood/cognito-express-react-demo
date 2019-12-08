import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignupPage from './SignupPage'
import LoginPage from './LoginPage'
import PublicPage from './PublicPage'
import PrivatePage from './PrivatePage'

const App = () => (
  <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
    <Router>
      <Switch>
        <Route path='/signup' exact component={SignupPage}/>
        <Route path='/login' exact component={LoginPage}/>
        <Route path='/public' exact component={PublicPage}/>
        <Route path='/private' exact component={PrivatePage}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </Router>
  </div>
)

export default App;
