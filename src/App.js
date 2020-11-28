import { Route, Switch } from "react-router-dom";
import firebase from "./firebase/firebase.utils";
import { Login, Signup } from "./components";
import { createContext } from "react";

export const Context = createContext();
const auth = firebase.auth;

function App() {
  return (
    <Context.Provider value={{auth}}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
