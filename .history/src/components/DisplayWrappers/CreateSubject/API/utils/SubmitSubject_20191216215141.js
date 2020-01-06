import { savePicture } from "Utils/PictureManager";
import { saveSubject } from "Utils/SubjectManager";
import uuidv4 from "uuid/v4";

const submitSubject = async (subject, image) => {
  const subjectId = uuidv4();

  try {
    if (image) {
      await savePicture(image);
    }

    await saveSubject(subject);

    // //UPDATE USER OBJECT!
  } catch (error) {
    window.log(`Error creating subject!: ${JSON.stringify(error)}`);
    throw error;
  }
};

export default submitSubject;
