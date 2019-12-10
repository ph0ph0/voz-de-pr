import { createSubject, createPicture } from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

import { useUser } from "CustomHooks/user";

const submitSubject = async (
  subjectTitle,
  subjectContent,
  subjectType,
  image,
  imageDescription,
  linkContent,
  linkDescription
) => {
  const { user } = useUser();

  if (!user) {
    return;
  }

  const fileObject = {
    bucket: "",
    region: "",
    key: ""
  };

  const pictureObject = {
    owner: user.id,
    description: imageDescription,
    file: fileObject
  };

  const subjectObject = {
    createdBy: user.id,
    author: user.username,
    title: subjectTitle,
    subjectContent: subjectContent,
    numberOfComments: 0,
    votes: 0,
    type: subjectType,
    pictures: await API.graphql(
      graphqlOperation(createPicture, { input: pictureObject })
    )
  };

  try {
    const subject = await API.graphql(
      graphqlOperation(createSubject, { input: subjectObject })
    );
    window.log(`Successfully created subject: ${subject}`);
    //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${error}`);
    throw error;
  }
};

export default submitSubject;
