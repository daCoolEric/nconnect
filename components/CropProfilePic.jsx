"use client";
import { setAvatarPreview } from "@app/GlobalRedux/Features/cropModal/avatarPreviewSlice";
import { closeCropProfileModal } from "@app/GlobalRedux/Features/cropModal/cropProfileModalSlice";
import getCroppedImg from "@components/Crop";
import Image from "next/image";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";

const CropProfilePic = () => {
  const avatar = useSelector((state) => state.avatar.value);
  const dispatch = useDispatch();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(avatar, croppedAreaPixels);
      console.log("Done", { croppedImage });

      dispatch(setAvatarPreview(croppedImage));
      dispatch(closeCropProfileModal("hidden"));
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    dispatch(closeCropProfileModal("hidden"));
  };

  return (
    <div className="h-screen w-screen  bg-black/60 absolute z-10 //outline //outline-black">
      <div className="h-5/6 //outline //outline-green-500 overflow-hidden">
        <Cropper
          image={avatar}
          crop={crop}
          zoom={zoom}
          aspect={2 / 2}
          cropShape="round"
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>

      <div className="w-screen h-1/6  //outline //outline-red-500 flex justify-center items-center absolute z-10 ">
        <div className="w-full h-full grid grid-cols-2 divide-x //outline //outline-blue-500 flex justify-between items-center ">
          <div className="w-full h-fit flex justify-center items-center //outline //outline-yellow-500 ">
            <button
              id="Cancel-Button"
              type="button"
              className="w-full text-white text-2xl font-medium focus:outline-none flex justify-center items-center //disabled:opacity-25"
              onClick={onClose}
            >
              <Image
                src="/assets/icons/dont.png"
                width={50}
                height={50}
                alt="Cancel Icon"
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
          <div className="w-full h-fit  flex justify-center items-center //outline //outline-red-500 ">
            <button
              id="Crop-Button"
              type="button"
              className="w-full text-white text-2xl font-medium focus:outline-none flex justify-center items-center //disabled:opacity-25"
              onClick={showCroppedImage}
            >
              <Image
                src="/assets/icons/do.png"
                width={50}
                height={50}
                alt="Crop Icon"
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropProfilePic;
