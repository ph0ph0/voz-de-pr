import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";
import { updateUser } from "graphql/mutations";

export const getUserObject = async id => {
  try {
    const user = await API.graphql(graphqlOperation(getUser, { id: id }));
    const parsedUser = parseUser(user.data.getUser);
    window.log(`uO: ${JSON.stringify(parsedUser)}`);
    return parsedUser;
  } catch (error) {
    window.log(`Error getting User Object: ${error.message}`);
    throw error;
  }
};

const parseUser = user => {
  const unParsedVoiceNumber = user.voiceNumber;
  window.log(`Current voiceNumber: ${unParsedVoiceNumber}`);
  var vNString = String(unParsedVoiceNumber);
  while (vNString.length < 7) {
    vNString = "0" + vNString;
    window.log(`new voiceNumber: ${vNString}`);
  }
  user.voiceNumber = vNString;
  return user;
};

export const updateUserObject = async data => {
  window.log("Updating user object...");
  const updatedUser = await API.graphql(
    graphqlOperation(updateUser, { input: data })
  );
  const parsedUser = parseUser(updatedUser.data.updateUser);
  window.log(
    `Successfully updated user object! User: ${JSON.stringify(updatedUser)}`
  );
  return parsedUser;
};
