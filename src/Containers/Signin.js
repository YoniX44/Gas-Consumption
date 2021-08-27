import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import firebase from "firebase/app";
import "firebase/auth";
const auth = firebase.auth();

function Signin() {
  function SignInWithGoogle() {
    auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  return (
    <>
      <Typography>This is the lit pomadero 🔥🔥</Typography>
      <Button
        variant="outlined"
        style={{
          marginTop: "3%",
          display: "block",
          margin: "auto",
          width: "150px",
          backgroundColor: "#1B4046",
          color: "#ffffff",
        }}
        onClick={SignInWithGoogle}
      >
        Login
      </Button>
    </>
  );
}

export default Signin;
