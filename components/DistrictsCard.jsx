import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";

function DistrictsCard({ district, userId }) {
  const router = useRouter();
  // const districtName = useSelector((state) => state.districts.value);
  const region = useSelector((state) => state.region.value);
  const officeData = useSelector((state) => state.data.value);
  let subin = "subin";

  const getDistrictData = (district) => {
    // console.log(officeData);
    officeData.map((office) => {
      if (office.officeName === district.toLowerCase()) {
        console.log(office);
      }
    });
    // console.log(district);
  };
  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          router.push("/pages/userId/explore/region/district");

          getDistrictData(district);
        }}
      >
        {district}
      </button>
    </div>
  );
}

export default DistrictsCard;
