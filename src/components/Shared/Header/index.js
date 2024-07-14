import { AppBar, Box, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "initial" } }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            color="primary"
            variant="h6"
            fontWeight="bold"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to={"/"}>
              <img
                src="/logo-aluraflix.png"
                alt="Logo AluraFlix"
                width={"165px"}
                height={"46px"}
              />
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to={"/nuevo-video"}>
              <Button variant="outlined" text="Nuevo video" color="white" />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider color="#2A7AE4" sx={{ height: "2px" }} />
    </Box>
  );
};

export default Header;
