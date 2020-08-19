import React, { useState, FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link, Button } from '@material-ui/core';
import { shortenUrl } from './UrlService'
import { RouteComponentProps } from '@reach/router';

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
});

const SearchForm: FunctionComponent<RouteComponentProps> = props => {

    const [url, setUrl] = useState("")
    const [linkUrl, setLinkUrl] = useState("")
    
    async function makeTinyUrl() {
        const result = await shortenUrl(url)
        setLinkUrl(`http://localhost:8082/${result.code}`)
    }

    const classes = useStyles()

    return (
        <div className={classes.root}>
            {linkUrl.length > 0 &&
                <Typography>
                    <Link href={linkUrl}>{linkUrl}</Link>
                </Typography>
            }
            <form className={classes.form} noValidate autoComplete="off" onSubmit={(e) => {
                e.preventDefault();
                makeTinyUrl()
            }}>
                <div className={classes.urlgroup} >
                    <TextField value={url} onChange={e => setUrl(e.target.value)} className={classes.textfield} variant="filled" id="standard-basic" label="URL" />
                    <Button type="submit" variant="contained" size="small" color="primary">Shorten</Button>
                </div>
            </form>
        </div>
    )
};

export default SearchForm;