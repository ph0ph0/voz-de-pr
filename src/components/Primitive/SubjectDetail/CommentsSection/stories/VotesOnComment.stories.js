import React from "react";
import { storiesOf } from "@storybook/react";

import VotesOnComment from "../VotesOnComment";

storiesOf("Primitive/text/VotesOnComment", module)
  .add("0Votes", () => <VotesOnComment />)
  .add("1Vote", () => <VotesOnComment votesOnComment = {1}/>)
  .add("ManyVotes", () => <VotesOnComment votesOnComment = {1000}/>);