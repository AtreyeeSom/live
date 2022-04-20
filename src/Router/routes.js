import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import Sponser from '../component/sponser'
import Home from '../Home/home'
const Routes = () => {
  return (
    <div>
   <Router>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route path ="/sponser" component={Sponser}/>
       </Switch>
   </Router>
    </div>
  )
}

export default Routes