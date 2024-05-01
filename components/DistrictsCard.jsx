import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDistricts } from "@app/GlobalRedux/Features/district/districtSlice";
import { v4 as uuidv4 } from "uuid";
import { setOffice } from "@app/GlobalRedux/Features/office/office";
import { setOfficeData } from "@app/GlobalRedux/Features/officeData/officeDataSlice";
import { useSession } from "next-auth/react";
import { setOfficeIds } from "@app/GlobalRedux/Features/officeData/officeIdSlice";
import Image from "next/image";

function DistrictsCard({ district, userId }) {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      return null;
    },
  });
  const router = useRouter();

  // const districtName = useSelector((state) => state.districts.value);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const region = useSelector((state) => state.districts.value);
  const officeData = useSelector((state) => state.data.value);
  const officeIds = useSelector((state) => state.officeIds.value);

  let subin = "subin";
  // useEffect(() => {
  //   getDistrictData(district);
  // }, []);

  const getDistrictData = async (district) => {
    // try {
    //   setLoading(true);
    //   console.log(officeData);
    //   console.log(region);
    //   console.log(district);
    //   const resolvedPromises = await Promise.allSettled(
    //     officeData.map((office) => {
    //       if (office.districtname === district.toLowerCase()) {
    //         dispatch(setOffice(true));
    //         dispatch(setOfficeData(office));
    //         dispatch(
    //           setOfficeIds({
    //             districtId: office.id,
    //             regionId: office.region,
    //           })
    //         );
    //         console.log(office);
    //         console.log(officeIds);
    //       }
    //     })
    //   );
    //   if (resolvedPromises) {
    //     router.push(
    //       `/pages/${
    //         session?.data?.user?.id || uuidv4()
    //       }/explore/${region.toLowerCase()}/${district.toLowerCase()}`
    //     );
    //     setLoading(false);
    //   }
    // } catch (error) {}

    // console.log(district);

    try {
      setLoading(true);
      const response = await axios.get(
        `https://nconnect-peid.vercel.app/api/${
          session?.data?.user?.id || uuidv4()
        }/${region.toLowerCase()}/${district.toLowerCase()}/`
        // `http://localhost:3000/api/${
        //   session?.data?.user?.id || uuidv4()
        // }/${region.toLowerCase()}/${district.toLowerCase()}/`
      );
      console.log(response.data);

      // const resolvedPromise = await Promise.allSettled(() => {

      // });

      if (response) {
        dispatch(setOffice(true));
        dispatch(setOfficeData(response.data));
        dispatch(setDistricts(district));
        router.push(
          `/pages/${
            session?.data?.user?.id || uuidv4()
          }/explore/${region.toLowerCase()}/${district.toLowerCase()}`
        );
        setLoading(false);
      }
      // router.push(
      //   `/pages/${
      //     session?.data?.user?.id || uuidv4()
      //   }/explore/${region.toLowerCase()}/${district.toLowerCase()}`
      // );

      return result;
      //
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full h-20 //outline //outline-black">
      <button
        className=" w-full h-full flex justify-center items-center bg-green-400 p-5 rounded-lg text-slate-50 font-semibold"
        onClick={() => {
          getDistrictData(district);
        }}
      >
        {loading ? (
          <Image
            src="/assets/images/districtLoader.gif"
            width={50}
            height={50}
            alt="office loader"
            style={{ objectFit: "contain" }}
          />
        ) : (
          district
        )}
      </button>
    </div>
  );
}

export default DistrictsCard;
