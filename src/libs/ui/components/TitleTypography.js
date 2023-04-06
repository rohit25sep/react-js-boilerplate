import Typography from '@mui/material/Typography'
import React from 'react'

const TitleTypography = props => (
  <>
    <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
      {props.title}
    </Typography>
  </>
)

export default TitleTypography
