import React from "react";

function InfoTab({ info }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-8/12 h-max pt-3 pb-3 mt-3 flex justify-center items-center bg-green-50 px-1 py-1  font-medium text-green-700 ring-1 ring-inset ring-green-600/20 //outline //outline-green-400 rounded-lg text-md">
        {info}
      </div>
    </div>
  );
}

export default InfoTab;
