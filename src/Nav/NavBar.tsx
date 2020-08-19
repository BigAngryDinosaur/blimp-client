import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import LoginInfo from '../LoginInfo/LoginInfo';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
    linkWrapper: {
        padding: "5px",
        marginTop: "20px"
    },
    link: {
        margin: "5px"
    }
});

const NavBar: FunctionComponent<Object> = props => {
    const classes = useStyles();
    return (
        <Box className={classes.linkWrapper}>
            <Link className={classes.link} to="/">Home</Link>
            <Box component="span" className={classes.link} ><LoginInfo /></Box>
        </Box>
    )
};

export default NavBar;