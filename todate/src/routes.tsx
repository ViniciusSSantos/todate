import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import events from './pages/events';

import Landing from "./pages/landing"
import Login from './pages/login';
import SignUp from './pages/signup';
import Events from './pages/events'


function Routes(){

    return (

        <BrowserRouter>
        <Switch>
        <Route path ="/landing" exact component = {Landing}/>
        <Route path ="/signup"  component = {SignUp} /> 
        <Route path ="/login"  component = {Login}  />   
        <Route path = "/user/:id" component = {Events}  />

        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;