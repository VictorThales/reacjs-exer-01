import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles/style'
import Message from './message'

function MessageArea() {
    const classes = useStyles()
    return (
        <Grid className={classes.messageArea} container spacing={3}>
            <Message type={'company'}/>
            <Message type={'client'}/>
            <Message type={'company'}/>
        </Grid>
    )
}

export default MessageArea;