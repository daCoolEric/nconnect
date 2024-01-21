import { uploads } from "@utils/cloudinary";
import fs from "fs";

export const POST = async (req, res) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  if (req.files.length > 0) {
    const uploader = async (path) =>
      await uploads(path, "nconnect/profile_photos");

    const file = req.files[0];
    const { path } = file;

    const avatarResponse = await uploader(path);
    fs.unlinkSync(path);
    newUserData.avatar = avatarResponse;
    console.log(avatarResponse);
  }

  // const user = await User.findByIdAndUpdate(req.user._id, newUserData);

  res.status(200).json({
    user,
  });
};
