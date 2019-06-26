import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import SelectButton from './SelectButton'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}))

const SongTitle = ({children}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        {children}
      </Typography>
    </Paper>
  )
}

export default SongTitle
