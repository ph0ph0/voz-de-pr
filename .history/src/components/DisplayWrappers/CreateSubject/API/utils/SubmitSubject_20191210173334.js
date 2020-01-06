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
  const subjectObject = {
      createdBy: "",
    author: "",
    title: String!,
	subjectContent: String!,
	timePassedSinceCreation: String,
	numberOfComments: Int,
	votes: Int,
	type: SubjectType!,
	userSubjectsId: ID,
    };

  try {
    const subject = await API.graphql(
      graphqlOperation(createSubject, {input: subjectObject})
    );
    window.log(`Successfully created subject: ${subject}`);
    //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${error}`);
    throw error;
  }
};

export default submitSubject;
