import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./devConfig.config";
// import * as serviceWorker from './serviceWorker';

import Amplify from "aws-amplify";
import awsMobile from "./aws-exports";

Amplify.configure({
  Auth: {
    region: awsMobile.aws_appsync_region,
    userPoolId: awsMobile.aws_user_pools_id,
    identityPoolId: awsMobile.aws_cognito_identity_pool_id,
    userPoolWebClientId: awsMobile.aws_user_pools_web_client_id
  }
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
