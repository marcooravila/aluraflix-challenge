import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Form = ({title, children}) => {
  return (
    <Box bgcolor={"secondary.main"} padding={4} component="form">
      <Container>
        <Typography
          component={"h2"}
          variant="h3"
          textAlign={"center"}
          color={"white.main"}
        >
          {title}
        </Typography>
            {children}
        </Container>
    </Box>
  )
}

export default Form