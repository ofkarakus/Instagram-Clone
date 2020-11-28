import { Route, Switch } from "react-router-dom";
import fb from "./firebase/firebase.utils";
import {Login , Signup} from './components' 

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
