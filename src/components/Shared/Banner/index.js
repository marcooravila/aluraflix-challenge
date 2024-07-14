import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";


const Banner = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "rgb(42,122,228)",
        background:
          "radial-gradient(circle, rgba(42,122,228,1) 0%, rgba(25,25,25,1) 100%)",
      }}
      padding={4}
      alignContent={"center"}
    >
      <Grid item xs={12} sm={6}>
      <Typography
          gutterBottom
          variant="h6"
          component="div"
          bgcolor="primary.main"
          color="white.main"
          marginTop={2}
          padding={2}
          display={"inline-block"}
          borderRadius={2}
        >
          Front End
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="white.main"
          marginTop={2}
        >
          Challege React
        </Typography>
        <Typography variant="p" color="white.main">
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} padding={2} display={"flex"} justifyContent={"center"}>
        <iframe width="100%" height="340" src="https://www.youtube.com/embed/ov7vA5HFe6w?si=7OEvOqV7HKBhT1xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </Grid>
    </Grid>
  );
};

export default Banner;
