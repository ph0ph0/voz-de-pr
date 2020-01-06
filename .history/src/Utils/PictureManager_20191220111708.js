import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture } from "graphql/mutations";
import uuidv4 from "uuid/v4";
import imageCompression from "browser-image-compression";

export const savePictureWithSubjectId = async (image, subjectId) => {
  try {
    if (image.size > 2097152) {
      window.log(`Image too large, aborting!`);
      throw new Error("Image is too large, please select another one");
    }

    window.log(`Sending image to storage, name: ${image.name}`);

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
  } catch (error) {
    throw error;
  }
};
