// Firebase
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

// Material
import { theme } from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

// Containers
import Home from "./Containers/Home";
import Signin from "./Containers/Signin";

function App() {
  const [user] = useAuthState(auth);

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">{user ? <Home /> : <Signin />}</div>
    </MuiThemeProvider>
  );
}

export default App;
