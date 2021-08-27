import React from "react";
import { auth } from "../firebaseConfig";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

function Navbar() {
  return (
    auth.currentUser && (
      <AppBar position="static" style={{ background: "#000000" }}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Pomadero 🍕</Typography>
          <IconButton
            variant="contained"
            style={{ color: "white" }}
            onClick={() => auth.signOut()}
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
  );
}

export default Navbar;
