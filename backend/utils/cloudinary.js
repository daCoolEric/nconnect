import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const deleteFromCloudinary = (public_id) => {
  cloudinary.uploader.destroy(public_id).then((result) => console.log(result));
};

const uploadToCloudinary = (fileUri, folder, oldBannerId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        public_id: oldBannerId,
        folder,
        overwrite: true,
        use_filename: true,
        unique_filename: false,
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

export { uploadToCloudinary, deleteFromCloudinary, cloudinary };
