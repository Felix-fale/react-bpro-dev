import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="contenu">
          <Switch>
            <Route path={"/"}>
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// https://www.youtube.com/watch?v=Ny3iznrppnU&t=946s Lien du cours
// 02h54m26
