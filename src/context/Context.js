import { useState, useEffect, createContext } from "react";
import firebase from "../firebase/firebase.utils";

export const Context = createContext();

function AppContext(props) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => setCurrentUser(user));
  }, []);

  return (
    <Context.Provider value={{ currentUser }}>
      {props.children}
    </Context.Provider>
  );
}

export default AppContext;
