import { savePicture } from "Utils/PictureManager";
import { saveSubject } from "Utils/SubjectManager";
import { useUser } from "CustomHooks/user";

const submitSubject = async (subject, image) => {
  const { updateUser } = useUser();
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
