import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Navbar() {
  return (
    <AppBar style ={{backgroundColor:'#000'}}  position="static">
      <Toolbar>
        <Typography variant="h6">Weather</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
