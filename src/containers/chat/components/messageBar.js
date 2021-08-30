import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useStyles } from '../styles/style'

function MessageBar({ add, typeControl, setType }) {
    const classes = useStyles()
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        add(text, typeControl)
    }

    return (
        <Grid className={classes.messageBar} container spacing={0}>
            <Grid className={classes.buttonContainer} item xs={9}>
                <TextField onChange={e => handleChange(e)} className={classes.textField} />
            </Grid>
            <Grid item xs={3}>
                <Button
                    onClick={() => handleClick()}
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