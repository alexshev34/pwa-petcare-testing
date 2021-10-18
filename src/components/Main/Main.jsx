import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Route } from 'workbox-routing';
import LoginCustomer from '../Login/LoginCustomer';
import LoginEmployee from '../Login/LoginEmployee';
import MainPage from '../MainPage/MainPage';
import Registration from '../Registration/Registration';

const Main = () => {
        return(
            <>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/login-employee" component={LoginEmployee}/>
                    <Route exact path="/login-customer" component={LoginCustomer}/>
                    <Route exact path="/registration" component={Registration}/>
                </Switch>
            </>
        )
}

export default Main;

