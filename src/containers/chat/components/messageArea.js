import { Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles/style'
import Message from './message'

function MessageArea({ messages }) {
    const classes = useStyles()
    return (
        <Grid className={classes.messageArea} container spacing={3}>
            {messages.map(({ type, text, hour, deletedAt }) =>
                <Message
                    type={type}
                    text={text}
                    hour={hour}
                    deleteAt={deletedAt}
                />)}
        </Grid>
    )
}

export default MessageArea;