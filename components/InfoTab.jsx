import React from "react";

function InfoTab({ info }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 h-max pt-5 pb-5 mt-5 flex justify-center items-center bg-green-400 //outline //outline-green-400 rounded-lg text-white text-xl">
        {info}
      </div>
    </div>
  );
}

export default InfoTab;
