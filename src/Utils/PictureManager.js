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

export const getPicture = async key => {
  window.log("Getting picture from storage...");

  // const tempKey = "userAvatars/e510d7b1-9e29-4965-848b-1709d3291d36.png";
  const picture = await Storage.get(key);

  window.log(`Got Picture!: ${picture}`);

  return picture;
};

//Can be used for both create and update as .put() is only create/update call for S3
export const createUserProfilePic = async (avatar, userId) => {
  window.log("Saving avatar...");
  //Get the extension (png, jpg) and set the folder name
  const lastDot = avatar.name.lastIndexOf(".");
  const extension = avatar.name.substring(lastDot);
  const folder = "userAvatars";
  const fileName = `${folder}/${userId}${extension}`;
  window.log(`Saving profile pic: ${fileName}`);

  //Save the image to storage and get the returned file key (name of file)
  const s3Output = await Storage.put(fileName, avatar);
  const fileKey = s3Output.key;
  window.log(`avatar fileKey: ${fileKey}`);
  window.log(`avatar saved!`);
  return;
};

//Used to null the properties of a picture if we want to force a refresh
export const nullPictureKey = async id => {
  const nulledPicture = {
    id: id,
    key: null
  };

  const pictureObject = await API.graphql(
    graphqlOperation(updatePicture, { input: nulledPicture })
  );
};
