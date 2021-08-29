import { Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../styles/style'

function Message({type}) {
    const classes = useStyles()
    const defineClassContainer = type === 'company' ? classes.messageContainerCompany :  classes.messageContainerClient
    const defineClassText = type === 'company' ? classes.messageTextCompany :  classes.messageTextClient
    return (
       <div className={defineClassContainer} >
          <p className={defineClassText}> Message Example </p> 
        </div>
    )
}

export default Message;