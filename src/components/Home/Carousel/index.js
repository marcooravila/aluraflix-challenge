import { Box, Container, Grid, Typography } from '@mui/material'
import Slider from '../Slider'

const Carousel = ({category}) => {
  
  return (
    <Box
      bgcolor={"secondary.main"}
      padding={2}
    >
      <Container>
        <Grid container >
          {
            category
            && (
              <Grid item display={"flex"} alignItems={"center"}>
                <Typography variant='h5'component={'h2'} color={"white.main"} bgcolor={category.color} marginTop={2} marginBottom={2} padding={1} borderRadius={1}>{category.name}</Typography>
                <Typography variant='h6'component={'h3'} color={"gray"} marginLeft={2}> Formacion {category.name}</Typography>
              </Grid>
            )
          }
        </Grid>    
        <Slider category={category}/>
      </Container>
    </Box>
  )
}

export default Carousel