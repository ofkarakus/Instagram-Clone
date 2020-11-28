import { Route, Switch } from "react-router-dom";
import fb from "./firebase/firebase.utils";
import {Login} from './components' 

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details/:id" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Route component={Error} />
      </Switch> */}
    </div>
  );
}

export default App;
