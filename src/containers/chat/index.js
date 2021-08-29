import { Grid } from '@material-ui/core'
import React from 'react'
import Header from './components/header'
import MessageArea from './components/messageArea'
import MessageBar from './components/messageBar'
import { useStyles } from './styles/style'

function Chat() {
    const classes = useStyles()
    return (
        <Grid className={classes.root} container spacing={0}>
            <Grid item xs>
            </Grid>
            <Grid className={classes.chatArea} item xs={6}>
               <Header/>
               <MessageArea/>
               <MessageBar/>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    )
}

export default Chat;