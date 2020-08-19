import React, { useState, FunctionComponent, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { RouteComponentProps } from '@reach/router';
import { authenticate } from '../Auth/AuthService';
import UserContext from '../Auth/UserContext';

const useStyles = makeStyles({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    form: {
        height: "48px",
        padding: '0 30px',
    },
    textFields: {
        display: "block",
        marginBottom: "5px"
    }
});

const LoginForm: FunctionComponent<RouteComponentProps> = props => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useContext(UserContext);

    async function login() {
        const user = await authenticate({ username: username, password: password });
        setUser(user);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.form} noValidate onSubmit={e => {
                e.preventDefault();
                login()
            }}>
                <TextField className={classes.textFields} id="standard-basic" label="username" required value={username} onChange={e => setUsername(e.target.value)} />
                <TextField className={classes.textFields} id="standard-basic" label="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button type="submit" variant="contained" size="small" color="primary">Login</Button>
            </form>
        </div>
    );
};

export default LoginForm;