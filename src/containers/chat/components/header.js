import React from 'react'
import { useStyles } from '../styles/style'

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.header}>
        <div className={classes.textHeader}>
           Atendimento on-line
        </div>
      </div>
      )
}

      export default Header;