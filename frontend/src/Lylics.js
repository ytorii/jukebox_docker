import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  lylic: {
    margin: theme.spacing(1),
    color: 'dimgray'
  }
}));

const Lylics = ({title, children}) => {
  const classes = useStyles();

  const [lylics, setLylics] = useState([])

  useEffect(() => setLylics(lylics => [...lylics, children]) ,[children])
  useEffect(() => setLylics([]) ,[title])

  return (
    <div>
      { lylics.map( lylic => (
        <div>
          <Slide direction="up" in={true} timeout={2000}>
            <Typography variant="h4" component="h4" className={classes.lylic}>
              {lylic}
            </Typography>
          </Slide>
        </div>
      )) }
    </div>
  )
}

export default Lylics
