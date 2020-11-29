import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogIn, SignUp, Home } from "../pages/";
import { useContext } from "react";
import { Context } from "../context/Context";

function AppRouter() {
  const { currentUser } = useContext(Context);

  return (
    <Router>
      {currentUser ? (
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={LogIn} exact />
          <Route path="/signup" component={SignUp} />
          <Route component={Error} />
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
