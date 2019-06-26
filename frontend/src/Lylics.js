import React, { useEffect, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'

const Lylics = ({title, children}) => {

  const [lylics, setLylics] = useState([])

  useEffect(() => setLylics(lylics => [...lylics, children]) ,[children])
  useEffect(() => setLylics([]) ,[title])

  return (
    <div>
      { lylics.map( lylic => (
        <div>
          <Slide direction="up" in={true} timeout={2000}>
            <Typography variant="h4" component="h4">
              {lylic}
            </Typography>
          </Slide>
        </div>
      )) }
    </div>
  )
}

export default Lylics
