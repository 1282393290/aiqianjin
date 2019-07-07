import React, { Component } from 'react'
import {HashRouter as Router, Route, NavLink,Switch} from 'react-router-dom'
import {Home, About, Introduce,Jump} from './views'

class AppUi extends Component {
  constructor (props) {
    super(props)
    //console.log(props)
  }
  render () {
    return (
        <Router>
           <Switch>
            <Route component={About} path="/about"/>
            <Route component={Introduce} path="/introduce"/>
            <Route component={Jump} path="/jump"/>
            <Route component={Home} path="/"/>
           </Switch>
        </Router>
    )
  }
}

export default AppUi