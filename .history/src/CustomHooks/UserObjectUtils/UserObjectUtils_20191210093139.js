import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "graphql/queries";

export const getUserObject = async id => {
  try {
    const user = await API.graphql(graphqlOperation(getUser, { id: id }));
    const parsedUser = parseUser(user);
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

export const updateUserObject = async () => {};
