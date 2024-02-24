"use client";
import getCroppedImg from "@components/Crop";
import Image from "next/image";
import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";

const CropImage = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, image]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const handleImageUpload = async (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div className="w-full h-1/6 //outline //outline-blue-500 flex justify-evenly items-center ">
        <div className="w-1/3 h-fit bg-green-400 //outline //outline-red-500 rounded-lg hover:bg-green-300 py-2 absolute z-10 left-10">
          <label className="_coverImage-holder">
            Upload Image
            <input
              type="file"
              name="cover"
              onChange={handleImageUpload}
              accept="img/*"
            />
          </label>
        </div>
        <div className="w-1/3 h-fit bg-green-400 //outline //outline-red-500 rounded-lg hover:bg-green-300 py-2 absolute z-10 right-10">
          <button
            id="Crop-Button"
            type="button"
            className="w-full text-white text-2xl font-medium focus:outline-none //disabled:opacity-25"
            onClick={showCroppedImage}
          >
            Crop
          </button>
        </div>
      </div>
      {!croppedImage && (
        <div className="crop-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={3 / 2}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
      )}

      <div className="w-full  outline outline-black">
        {croppedImage && (
          <Image
            src={croppedImage}
            width={640}
            height={427}
            alt="Cropped Image"
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div className="w-1/3 h-fit bg-red-400 //outline //outline-yellow-500 rounded-lg hover:bg-red-300 py-2 absolute z-10 left-10">
        <button
          id="Cancel-Button"
          type="button"
          className="w-full text-white text-2xl font-medium focus:outline-none //disabled:opacity-25"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CropImage;
