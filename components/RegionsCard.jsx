"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { setRegion } from "@app/GlobalRedux/Features/region/regionSlice";
import { setData } from "@app/GlobalRedux/Features/data/dataSlice";
import { useSession } from "next-auth/react";
import Image from "next/image";

const RegionsCard = ({ region }) => {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const officeData = useSelector((state) => state.data.value);

  const getRegionData = () => {
    router.push(
      `/pages/${
        session?.data?.user?.id || uuidv4()
      }/explore/${region.toLowerCase()}/`
    );
    //   setLoading(false);
    // }
    // // console.log(officeData);
    // return resolvedPromises;
    // //
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full  flex justify-center items-center bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          getRegionData(region);

          dispatch(setDistricts(region));
          dispatch(setRegion(region));
        }}
      >
        {/* {loading ? (
          <Image
            src="/assets/images/districtLoader.gif"
            width={50}
            height={50}
            alt="district loader"
            style={{ objectFit: "contain" }}
          />
        ) : ( */}
        {region}
        {/* )} */}
      </button>
    </div>
  );
};

export default RegionsCard;
