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
        Maybe setup the below auth type as the awsmobile version, then configure this using cog pools? Find an example where they setup the auth object here rather than just feed it in
    },
    aws_appsync_graphqlEndpoint: awsMobile.aws_appsync_graphqlEndpoint,
    aws_appsync_region: awsMobile.aws_appsync_region,
    aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
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
