import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import About from '../component/about'

import Pnb from '../component/pnb'
import Sponser from '../component/sponser'
import Study from '../component/study'
import Visitor from '../component/visitor'
import Home from '../Home/home'
const Routes = () => {
  return (
    <div>
   <Router>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route path ="/sponser" component={Sponser}/>
           <Route path ="/pnb" component={Pnb}/>
           <Route path ="/study" component={Study}/>
           <Route path="/about" component={About}/>
           <Route path ="/visitor" component={Visitor}/>
       </Switch>
   </Router>
    </div>
  )
}

export default Routes