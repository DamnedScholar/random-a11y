import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import Top from '../containers/Top'
import Palette from '../containers/Palette'
import Explore from '../containers/Explore'

const routes = (
  <Route path='/' component={App}>
    <Route path='top' component={Top} />
    <Route path='palette' component={Palette} />
    <Route path='explore' component={Explore} />
  </Route>
)

export default routes
