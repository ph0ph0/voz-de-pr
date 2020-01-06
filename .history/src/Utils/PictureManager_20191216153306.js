import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture } from "graphql/mutations";

export const savePicture = async () => {
  window.log(`Sending image to storage`);
  const s3Output = await Storage.put(`${key}.${extension}`, image);
  const fileKey = s3Output.key;

  const fileObject = {
    bucket: "vozdeprsubjectimagesstorages3service",
    region: "us-east-1",
    key: fileKey
  };

  const picture = {
    // owner: "TEST_USER",
    description: subject.imageDescription,
    file: fileObject
  };

  const pictureObject = await API.graphql(
    graphqlOperation(createPicture, { input: picture })
  );
};
