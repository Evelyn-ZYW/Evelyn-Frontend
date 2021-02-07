import './App.scss';
import Form from './comps/Form';
import Main from 'pages/main';
import User from 'pages/user';
import List from 'pages/list';
import Array from 'pages/arrays';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to='/'>Home</Link>
          <Link to='/arrays'>Arrays</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/arrays">
            <Array />
          </Route>
          <Route path="/arrays/:id">
            <Array />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
