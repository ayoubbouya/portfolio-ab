import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
