import React, { useContext, FunctionComponent } from 'react';
import LoginForm from '../Login/LoginForm';
import { Link } from '@reach/router';
import { Typography, Box, makeStyles } from '@material-ui/core';
import UserContext from '../Auth/UserContext';
import { User } from '../Auth/AuthService';

interface UserGreetingProps {
    user: User
}

const UserGreeting: FunctionComponent<UserGreetingProps> = props => {
    return <h3>Welcome <i>{props.user.name}</i></h3>
}

function LoginInfo() {
    const [user] = useContext(UserContext);
    if (user.name != null) {
        return <UserGreeting user={user} />
    } else {
        return <Link to="/login" >Login</Link>
    }
}

export default LoginInfo;