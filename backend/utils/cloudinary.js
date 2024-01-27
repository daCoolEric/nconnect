import { v2 as cloudinary } from "cloudinary";
import { unlink } from "fs/promises";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// const uploads = (filePath, folder) => {
//   cloudinary.uploader
//     .upload(filePath, { folder })
//     .then((result) => {
//       console.log({
//         public_id: result.public_id,
//         url: result.url,
//       });
//       unlink(filePath);
//     })
//     .catch((error) => console.warn(error));
// };

const uploadToCloudinary = (fileUri, folder) => {
  return new Promise((resolve, reject) => {
    var result = cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        folder,
      })
      .then((result) => {
        console.log(result);
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export { uploadToCloudinary, cloudinary };
