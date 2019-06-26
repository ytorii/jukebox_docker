import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  button: { margin: theme.spacing(1) }
}))

const SelectButton = ({onClick}) => {
  const classes = useStyles()

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={onClick}>
      Select a song
    </Button>
  )
}

export default SelectButton
