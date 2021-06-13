import "./App.css";
import Login from "./components/Login/Login";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
