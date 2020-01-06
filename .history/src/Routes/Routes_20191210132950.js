import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useUser } from "CustomHooks/user";

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
import ConfirmSignUp from "../components/Pages/ConfirmSignUp";

const Routes = props => {
  const { user } = useUser();
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
        {user ? <Profile /> : <Redirect to="/signup" />}
      </Route>
      <Route path="/create-cause">
        {user ? <CreateCause /> : <Redirect to="/signup" />}
      </Route>
      <Route path="/create-post">
        {user ? <CreatePost /> : <Redirect to="/signup" />}
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
      <Route exact path="/confirmsignup">
        <ConfirmSignUp />
      </Route>
      <Route path="/:subjectID">
        <SubjectDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
