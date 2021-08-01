import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/landing"
import SignUp from './pages/signup';



function Routes(){

    return (

        <BrowserRouter>
        <Switch>
        <Route path ="/landing" exact component = {Landing}/>
        <Route path ="/signup"  component = {SignUp} />    

        </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;