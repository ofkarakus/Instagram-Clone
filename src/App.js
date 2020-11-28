import { Route, Switch } from "react-router-dom";
import firebase from "./firebase/firebase.utils";
import { Login, Signup, Home } from "./components";
import { createContext, useState } from "react";

export const Context = createContext();
const auth = firebase.auth;

function App() {
  const [hasSession, setSession] = useState();

  auth.onAuthStateChanged((user) =>
    user ? setSession(true) : setSession(false)
  );

  return (
    <Context.Provider value={{ auth }}>
      {hasSession ? (
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} />
          <Route component={Error} />
        </Switch>
      )}
    </Context.Provider>
  );
}

export default App;
