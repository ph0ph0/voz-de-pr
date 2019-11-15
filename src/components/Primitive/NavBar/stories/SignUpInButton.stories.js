import SignUpInButton from "../SignUpInButton.js";
import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

storiesOf("Primitive|/Buttons/SignUpInButton", module)
  .add("Standard", () => <SignUpInButton onClick={action("clicked")}></SignUpInButton>, {
    notes: "These are the buttons used to sign up or log in"
  })
  .add("Login", () => <SignUpInButton onClick={action("clicked")}>LOG IN</SignUpInButton>)
  .add("SignUp", () => <SignUpInButton onClick={action("clicked")} secondary>SIGN UP</SignUpInButton>);


// export default {
//     component: SignUpInButton,
//     title: 'Primitive|Buttons/SignUpInButton'
// }

// export const button = () => <SignUpInButton onClick={action('clicked')}></SignUpInButton>
// export const LogIn = () => <SignUpInButton onClick={action('clicked')}>LOG IN</SignUpInButton>
// export const SignUp = () => <SignUpInButton onClick={action('clicked')} secondary>SIGN UP</SignUpInButton>