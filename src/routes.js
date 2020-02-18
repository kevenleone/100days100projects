import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import * as Projects from './Projects'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        { Object.keys(Projects).map(p => {
            const { default: Component, config: { id } } = Projects[p];
            const key = id === 0 ? '/' : `/${String(id).padStart(3,0)}`;
            return (
              <Route key={key} component={Component} exact path={key} ></Route>
            )
          })}
      </Switch>
    </BrowserRouter>
  )
}
