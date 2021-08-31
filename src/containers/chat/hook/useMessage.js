import { useState } from "react"
import { TYPES } from '../constants/messageTypes'


export function useMessage() {

  const [message, setMessage] = useState([{
    text: 'Olá em que posso ajudá-lo?',
    type: TYPES.ATTENDANT
  }])

  const [typeControl, setTypeControl] = useState(TYPES.CLIENT)

  function addMessage(text, type) {
    let newArray = []
    newArray = [...message, {
      text,
      type: type
    }]
    setMessage([...newArray])
    if (type === TYPES.CLIENT) {
      setTypeControl(TYPES.ATTENDANT)
    } else {
      setTypeControl(TYPES.CLIENT)
    }
  }

  return {
    states: {
      message,
      typeControl
    },
    actions: {
      addMessage,
      setTypeControl
    }
  }
}
