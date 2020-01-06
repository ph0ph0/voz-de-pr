import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture } from "graphql/mutations";
import uuidv4 from "uuid/v4";

export const savePictureWithSubjectId = async (image, subjectId) => {
  //Check image is not larger than 2 MB
  if (image.size > 2097152) {
    window.log(`Image too large, aborting!`);
    throw new Error("Image is too large, please an image smaller than 2 MB");
  }

  window.log(
    `Sending image to storage, name: ${image.name}, size: ${image.size}`
  );

  //Get the extension (png, jpg), generate a random key and set the folder name
  const lastDot = image.name.lastIndexOf(".");
  const extension = image.name.substring(lastDot);
  const key = uuidv4();
  const folder = "subjectPictures";

  //Save the image to storage and get the returned file key (name of file)
  const s3Output = await Storage.put(`${folder}/${key}${extension}`, image);
  const fileKey = s3Output.key;

  //Create the image object to be saved to dDB
  const picture = {
    id: key,
    subjectId: subjectId,
    bucket: "voz-de-pr-mediastorages3-dev",
    region: "us-east-1",
    key: fileKey
  };

  //Save image object to dDB
  const pictureObject = await API.graphql(
    graphqlOperation(createPicture, { input: picture })
  );

  window.log(`image sent!`);
  return pictureObject;
};

const getPictureWithSubjectId = async key => {
  const picture = await Storage.get(key);

  return picture;
};
