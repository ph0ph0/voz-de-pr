import { API, graphqlOperation, Storage } from "aws-amplify";
import { createPicture } from "graphql/mutations";
import uuidv4 from "uuid/v4";
import imageCompression from "browser-image-compression";

export const savePictureWithSubjectId = async (image, subjectId) => {
  window.log(`Sending image to storage, name: ${image.name}`);

  const lastDot = image.name.lastIndexOf(".");
  const extension = image.name.substring(lastDot);
  const key = uuidv4();
  const folder = "subjectPictures";

  const compressedImage = imageCompression(image, {
    maxSize: 0.1
  });

  const s3Output = await Storage.put(
    `${folder}/${key}${extension}`,
    compressedImage
  );
  const fileKey = s3Output.key;

  const picture = {
    id: key,
    subjectId: subjectId,
    bucket: "voz-de-pr-mediastorages3-dev",
    region: "us-east-1",
    key: fileKey
  };

  const pictureObject = await API.graphql(
    graphqlOperation(createPicture, { input: picture })
  );

  window.log(`image sent!`);
  return pictureObject;
};
