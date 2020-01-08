import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture, updatePicture } from "graphql/mutations";
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

export const createUserProfilePic = async (avatar, userId) => {
  window.log("Saving avatar...");
  //Get the extension (png, jpg) and set the folder name
  const lastDot = avatar.name.lastIndexOf(".");
  const extension = avatar.name.substring(lastDot);
  const folder = "userAvatars";

  //Save the image to storage and get the returned file key (name of file)
  const s3Output = await Storage.put(`${folder}/${userId}${extension}`, avatar);
  const fileKey = s3Output.key;
  window.log(`avatar fileKey: ${fileKey}`);

  //Create the image object to be saved to dDB
  const picture = {
    id: userId,
    bucket: "voz-de-pr-mediastorages3-dev",
    region: "us-east-1",
    key: fileKey
  };

  //Save image object to dDB. We use updatePicture so that this function can be
  //used during signup or when user changes profile picture
  const pictureObject = await API.graphql(
    graphqlOperation(createPicture, { input: picture })
  );

  window.log(`avatar saved!`);
  return pictureObject;
};
