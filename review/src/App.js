import './App.scss';
// import Form from './comps/Form';
// import Main from 'pages/main';
// import User from 'pages/user';
// import List from 'pages/list';
// import Array from 'pages/arrays';
// import ReadData from 'pages/read_data';
// import Profile from 'pages/read_data/profile';
// import EditProfile from 'pages/read_data/edit';
// import Login from 'pages/login';

import Main from 'pages/fullapp';
import UserPrac from 'pages/user';
import Login from 'pages/fullapp/login';
import Register from 'pages/fullapp/register';
import User from 'pages/fullapp/user';
import Message from 'pages/fullapp/message';

import Practice from 'pages/practice';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import axios from 'axios';
const token = sessionStorage.getItem("token");
// console.log("token", token)
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
  // history.push("/profile");
}
function App() {
  return (
    <Router>
      <div className="App">
        {/* <div>
          <Link to='/'>Home</Link>
          <Link to='/arrays'>Arrays</Link>
        </div> */}
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/user">
            <UserPrac />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/profile">
            <User />
          </Route>
          <Route exact path="/profile/edit">
            <User />
          </Route>

          {/* This will have parameters later */}
          <Route exact path="/message">
            <Message />
          </Route>
          {/* <Route exact path="/">
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
          </Route> */}
          <Route exact path="/practice">
            <Practice />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
