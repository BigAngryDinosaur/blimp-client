import React from 'react';
import LoginForm from '../Login/loginForm'
import { Button } from '@material-ui/core';

function UserGreeting() {
    return <h3>Welcome <i>Rush</i></h3>
}

function LoginButton() {
    return <Button variant="text">Login</Button>
}

function LoginInfo() {
    const isAuthenticated = false;
    return isAuthenticated ? <UserGreeting /> : <LoginInfo />
}

export default LoginInfo;