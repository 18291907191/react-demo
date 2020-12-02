import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const RouterView = props => {
  return (
  <Switch>  
    <Redirect to="/dashboard" from="/" exact />
    {
      props.routes.map((item,index) => {
        return <Route
          key={index}
          path={item.path}
          exact={item.exact}
          render={routeProps => {
            if(item.children) {
              return <item.component { ...routeProps } routes={item.children} />
            } else {
              return <item.component { ...routeProps } />
            }
          }} 
        />
      })
    }
  </Switch>
  )
}

export default RouterView;
