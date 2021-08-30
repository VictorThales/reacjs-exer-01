import { Grid } from '@material-ui/core'
import React from 'react'
import Header from './components/header'
import MessageArea from './components/messageArea'
import MessageBar from './components/messageBar'
import { useMessage } from './hook/useMessage'
import { useStyles } from './styles/style'

function Chat() {
    const classes = useStyles()
    const { states, actions } = useMessage()

    return (
        <Grid className={classes.root} container spacing={0}>
            <Grid item xs>
            </Grid>
            <Grid className={classes.chatArea} item xs={4}>
                <Header />
                <MessageArea messages={states.message} />
                <MessageBar add={actions.addMessage} setType={actions.setTypeControl} typeControl={states.typeControl} />
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    )
}

export default Chat;