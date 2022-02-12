import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function ContentContainer(props) {
  return (
    <Box
    sx={{
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
       {props.title}
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
      {props.content}
      </Typography>
    </Container>
  </Box>
  )
}
