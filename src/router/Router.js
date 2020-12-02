import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LogIn, SignUp, Home, Inbox, Explore } from "../pages/";
import { Header } from "../components/";
import { useContext } from "react";
import { Context } from "../context/Context";

function AppRouter() {
  const { currentUser } = useContext(Context);

  return (
    <Router>
      {currentUser ? (
        <>
          <Header />
          <Switch>
            <Route path="/inbox" component={Inbox} exact />
            <Route path="/explore" component={Explore} exact />
            <Route path="/" component={Home} />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/signup" component={SignUp} exact />
          <Route path="/" component={LogIn}  />
        </Switch>
      )}
    </Router>
  );
}

export default AppRouter;
