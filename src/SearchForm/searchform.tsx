import React from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Backdrop, Button } from '@material-ui/core';

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
    textfield: {
        width: "100%",
        marginRight: "10px"
    },
    urlgroup: {
        display: "flex",
        flexDirection: "row"
    }
})

function SearchForm() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form className={classes.form} noValidate autoComplete="off">
                <div className={classes.urlgroup} >
                    <TextField className={classes.textfield} variant="filled" id="standard-basic" label="URL" />
                    <Button variant="contained" size="small" color="primary">Shorten</Button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;