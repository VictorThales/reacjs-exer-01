import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles/style'

function MessageBar() {
    const classes = useStyles()
    return (
        <Grid className={classes.messageBar} container spacing={0}>
            <Grid className={classes.buttonContainer} item xs={9}>
                <TextField className={classes.textField}/>
            </Grid>
            <Grid item xs={3}>
                <Button
                    variant="outlined"
                    className={classes.sendButton}
                    color="primary">
                        Enviar
                </Button>
            </Grid>
        </Grid>
    )
}

export default MessageBar;