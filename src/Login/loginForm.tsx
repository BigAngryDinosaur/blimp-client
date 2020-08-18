import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    }
});

function loginForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function login() {

    }

    const classes = useStyles();

    return (
        <div>
            <form className={classes.form} noValidate onSubmit={e => {
                e.preventDefault();
                login()
            }}>
                <TextField id="standard-basic" label="username" required value={username} onChange={e => setUsername(e.target.value)} />
                <TextField id="standard-basic" label="password" required type="password" value={password} onChange={e => setUsername(e.target.value)} />
                <Button type="submit" variant="contained" size="small" color="primary">Login</Button>
            </form>
        </div>
    )
}

export default loginForm;