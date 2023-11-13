import React from "react";

function DistrictsCard({ district }) {
  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => router.push("/pages/userId/explore/region/district")}
      >
        {district}
      </button>
    </div>
  );
}

export default DistrictsCard;
