import React from "react";
import { Route, Switch } from "react-router-dom";

import MainFeed from "../components/Pages/MainFeed";
import Causes from "../components/Pages/Causes";
import Posts from "../components/Pages/Posts";
import Profile from "../components/Pages/Profile";
import CreateCause from "../components/Pages/CreateCause";
import CreatePost from "../components/Pages/CreatePost";
import SubjectDetail from "../components/Pages/SubjectDetail";
import SignUp from "../components/Pages/SignUp";
import SignIn from "../components/Pages/SignIn";
import ForgotPassword from "../components/Pages/ForgotPassword";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/">
        <MainFeed />
      </Route>
      <Route path="/causes">
        <Causes />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/create-cause">
        <CreateCause />
      </Route>
      <Route path="/create-post">
        <CreatePost />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route path="/:subjectID">
        <SubjectDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
