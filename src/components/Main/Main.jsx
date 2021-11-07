import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Route } from 'workbox-routing';
import LoginCustomer from '../Login/LoginCustomer';
import LoginEmployee from '../Login/LoginEmployee';
import MainPage from '../MainPage/MainPage';
import Registration from '../Registration/Registration';
import AddTaskUserEmployee from '../UserEmployee/AddTaskUserEmployee/AddTaskUserEmployee';
import AddUserEmployee from '../UserEmployee/AddUserEmployee/AddUserEmployee';
import HeaderUserEmployee from '../UserEmployee/HeaderUserEmployee/HeaderUserEmployee';
import InfoCardUserEmployee from '../UserEmployee/InfoCardUserEmployee/InfoCardUserEmployee';
import TaskUserEmployee from '../UserEmployee/TaskUserEmployee';
import UserEmployee from '../UserEmployee/UserEmployee';
const Main = () => {
    if (localStorage.getItem('tokens')) {
        return (
            <>
                <HeaderUserEmployee/>
                <Switch>
                    <Route exact path="/" component={UserEmployee} />   
                    <Route exact path="/task" component={TaskUserEmployee}/>
                    <Route exact path="/add-user" component={AddUserEmployee}/>
                    <Route exact path="/add-task" component={AddTaskUserEmployee}/>
                    <Route exact path="/info-card" component={InfoCardUserEmployee}/>
                </Switch>
            </>
        )
    }
    else {
        return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login-employee" component={LoginEmployee} />
                <Route exact path="/login-customer" component={LoginCustomer} />
                <Route exact path="/registration" component={Registration} />
            </Switch>
        )
    }

}

export default Main;

