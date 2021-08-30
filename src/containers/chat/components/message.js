import React from 'react'
import { TYPES } from '../constants/messageTypes'
import { useStyles } from '../styles/style'

function Message({ type, text }) {
    const classes = useStyles()
    const defineClassContainer = type === TYPES.ATTENDANT ? classes.messageContainerCompany : classes.messageContainerClient
    const defineClassText = type === TYPES.ATTENDANT ? classes.messageTextCompany : classes.messageTextClient
    return (
        <div className={defineClassContainer} >
            <p className={defineClassText}>{text}</p>
        </div>
    )
}

export default Message;