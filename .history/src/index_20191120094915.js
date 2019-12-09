import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./devConfig.config";
// import * as serviceWorker from './serviceWorker';

import Amplify, { Auth } from "aws-amplify";
import awsMobile from "./aws-exports";
import AWSAppSyncClient from "aws-appsync";

Amplify.configure({
  Auth: {
    identityPoolId: awsMobile.aws_cognito_identity_pool_id,
    region: awsMobile.aws_appsync_region,
    userPoolId: awsMobile.aws_user_pools_id,
    userPoolWebClientId: awsMobile.aws_user_pools_web_client_id
  },
  aws_appsync_graphqlEndpoint: awsMobile.aws_appsync_graphqlEndpoint,
  aws_appsync_region: awsMobile.aws_appsync_region,
  aws_appsync_authenticationType: awsMobile.aws_appsync_authenticationType
});

// const client = new AWSAppSyncClient({
//   url: awsMobile.aws_appsync_graphqlEndpoint,
//   region: awsMobile.aws_appsync_region,
//   auth: {
//     type: "AMAZON_COGNITO_USER_POOLS",
//     jwtToken: async () =>
//       (await Auth.currentSession()).getIdToken().getJwtToken()
//   }
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
