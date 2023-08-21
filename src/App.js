import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <div style={{ backgroundColor: "#F6F4EB" }}>
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Homepage />
          </Route>
          <Route path="/logins">
            <Login />
          </Route>
          <Route path="/registers">
            <Register />
          </Route>
          <Route path="/register">
            {currentUser ? <Homepage /> : <Register />}
          </Route>
          <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Color
// #F6F4EB
// #91C8E4
// #749BC2
// #4682A9
// https://colorhunt.co/palette/f6f4eb91c8e4749bc24682a9
