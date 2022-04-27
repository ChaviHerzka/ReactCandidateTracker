import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout  from './Layout';
import  Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Pending from './Pages/Pending';
import PendingDetails from './Pages/PendingDetails';
import Confirmed from './Pages/Confirmed';
import Refused from './Pages/Refused';
import { ContextComponent } from './Context';

export default class App extends Component {

  render () {
    return (
  <ContextComponent>
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/AddCandidate' component={AddCandidate}/>
        <Route exact path='/Pending' component={Pending}/>
        <Route exact path='/Pending/details/:id' component={PendingDetails}/> 
        <Route exact path='/Confirmed' component={Confirmed}/>
        <Route exact path='/Refused' component={Refused}/>
     </Layout>
   </ContextComponent>
    );
  }
}
