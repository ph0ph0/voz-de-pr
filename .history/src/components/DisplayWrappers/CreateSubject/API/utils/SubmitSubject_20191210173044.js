import { createSubject } from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const submitSubject = async (
  subjectTitle,
  subjectContent,
  image,
  imageDescription,
  linkContent,
  linkDescription
) => {
  try {
    const subject = await API.graphql(
      graphqlOperation(createSubject, subjectObject)
    );
    window.log(`Successfully created subject: ${subject}`);
  } catch (error) {
    window.log(`Error creating subject!: ${error}`);
    throw error;
  }
};

export default submitSubject;
