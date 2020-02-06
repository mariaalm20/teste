import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import List from './pages/List'


export default function Routes() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path = "/" exact component = {Home} />
       <Route path = "/list" component = {List} />
     </Switch>
    </BrowserRouter>
  )
}