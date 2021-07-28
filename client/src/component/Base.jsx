import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Register from '../screens/Register'
import Login from '../screens/Login'
import Chat from '../screens/Chat'
import Navigation from './helper/Navigation'

export default function Base() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Chat />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  )
}