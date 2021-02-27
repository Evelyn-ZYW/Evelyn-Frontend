import './App.scss';
import Form from './comps/Form';
import Main from 'pages/main';
import User from 'pages/user';
import List from 'pages/list';
import Array from 'pages/arrays';
import ReadData from 'pages/read_data';
import Profile from 'pages/read_data/profile';
import EditProfile from 'pages/read_data/edit';
import Login from 'pages/login';

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
            <Login />
          </Route>
          <Route exact path="/read">
            <ReadData />
          </Route>
          <Route exact path="/arrays">
            <Array />
          </Route>
          <Route path="/arrays/:id">
            <Array />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/edit/:id">
            <EditProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
