import React from 'react'
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import About from '../component/About'
import Assesment from '../component/assesment'
import Blog from '../component/blog'
import Blog_details from '../component/blog_details'
import Business from '../component/business'
import Canadian from '../component/canadian'
import Childgiver from '../component/childgiver'
import Citizenship from '../component/citizenship'
import Contact from '../component/Contact'
import International_agreement from '../component/international_agreement'
import Intra_company_transfer from '../component/intra_company_transfer'
import Lmia_based_work_permit from '../component/Lmia_based_work_permit'

import Pnb from '../component/pnb'
import Sponser from '../component/sponser'
import Study from '../component/study'
import Trades_cass from '../component/trades_cass'
import Visitor from '../component/visitor'
import Worker_class from '../component/worker_class'
import Work_permit from '../component/work_permit'
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
           <Route path="/business" component={Business}/>
           <Route path="/citizenship" component={Citizenship}/>
           <Route path="/blog" component={Blog}/>
           <Route path="/contact" component={Contact}/>
           <Route path="/work" component={Lmia_based_work_permit}/>
           <Route path="/intra" component={Intra_company_transfer}/>
          <Route path="/international" component={International_agreement}/>
          <Route path="/trades" component={Trades_cass}/>
          <Route path="/assesment" component={Assesment}/>
          <Route path="/details" component={Blog_details}/>
          <Route path="/canadian" component={Canadian}/>
          <Route path="/child" component={Childgiver}/>
          <Route path="/permit" component={Work_permit}/>
          <Route path="/works" component={Worker_class}/>
        </Switch>
   </Router>
    </div>
  )
}

export default Routes