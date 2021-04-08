import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Postform from './Postform'

export default function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/post" component={Postform} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>

  );
}
