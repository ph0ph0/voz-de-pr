import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture } from "graphql/mutations";
import uuidv4 from "uuid/v4";

export const savePicture = async image => {
  window.log(`Sending image to storage`);

  const extension = image.name.split(".")[1];
  const key = uuidv4();

  const s3Output = await Storage.put(`${key}.${extension}`, image);
  const fileKey = s3Output.key;

  const fileObject = {
    bucket: "vozdeprsubjectimagesstorages3service",
    region: "us-east-1",
    key: fileKey
  };

  const picture = {
    id: key,
    file: fileObject
  };

  const pictureObject = await API.graphql(
    graphqlOperation(createPicture, { input: picture })
  );

  return pictureObject;
};
