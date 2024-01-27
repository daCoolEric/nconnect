import { v2 as cloudinary } from "cloudinary";
import { unlink } from "fs/promises";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploads = (filePath, folder) => {
  cloudinary.uploader
    .upload(filePath, { folder })
    .then((result) => {
      console.log({
        public_id: result.public_id,
        url: result.url,
      });
      unlink(filePath);
    })
    .catch((error) => console.warn(error));
};

export { uploads, cloudinary };
