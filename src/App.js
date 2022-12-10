import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Create from "./Create";
import BlogDetail from "./BlogDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="contenu">
          <Switch>
            <Route exact path={"/"}>
              <Home></Home>
            </Route>
            <Route path={"/create"}>
              <Create></Create>
            </Route>
            <Route path={"/blogs/:id"}>
              <BlogDetail></BlogDetail>
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
