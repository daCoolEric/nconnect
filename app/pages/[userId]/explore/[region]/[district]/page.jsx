import React from "react";
import Link from "next/link";
import Image from "next/image";
import OfficeInfo from "@components/OfficeInfo";
import { officeIcons } from "@utils/officeIcons";
import { Gallery } from "@utils/gallery";

function District() {
  return (
    <div className="h-3/4 w-screen">
      {/* Specific District
      <Link href="/pages/userId/explore/">All Regions</Link>
      <Link href="/pages/userId/explore/region/">All Districts</Link>
      <Link href="/pages/userId/explore/region/district/staff-members">
        Staff members
      </Link>
      <Link href="/pages/signIn">Sign In</Link>
      <Link href="/pages/signUp">Sign Up</Link> */}
      <div
        className="//outline //outline-blue-700 w-screen h-1/2 relative "
        style={{
          borderBottomRightRadius: "30px",
          borderBottomLeftRadius: "30px",
        }}
      >
        <Image
          src="/assets/images/office.jpg"
          fill
          alt="Office Picture"
          // style={{ objectFit: "contain" }}
        />
      </div>
      <div className="//outline //outline-blue-700 w-screen h-fit">
        <div className="//outline //outline-red-700 w-11/12  mt-4  m-auto h-fit">
          <p className="w-fit //outline-blue-700 ">
            We are responsible for the official registration of citizens within
            our jurisdiction and beyond. We ensure that individuals are properly
            documented and recognized as legal residents or citizens of the
            Republic of Ghana. We maintain up-to-date records of residents,
            including vital information such as names, accurate date of births,
            marital status, employment status, and current residential addresses
            and more.
          </p>
        </div>
        <div className="//outline //outline-yellow-600 w-11/12 m-auto h-fit">
          {/* Component will go here */}
          <OfficeInfo
            source={officeIcons.location.src}
            alt={officeIcons.location.alt}
            data={"Description will go there."}
          />
          <OfficeInfo
            source={officeIcons.time.src}
            alt={officeIcons.time.alt}
            data={"Description will go there."}
          />
          <OfficeInfo
            source={officeIcons.calendar.src}
            alt={officeIcons.calendar.alt}
            data={"Description will go there."}
          />
          <OfficeInfo
            source={officeIcons.contact.src}
            alt={officeIcons.contact.alt}
            data={"Description will go there."}
          />
        </div>
        <div className="//outline //outline-yellow-600 w-11/12 m-auto mt-5 h-fit ">
          <Link href="/pages/userId/explore/region/district/staff-members ">
            <div className="w-full h-full mt-2 flex justify-center bg-green-400 rounded-lg hover:bg-green-300 py-1 pt-4 pb-4">
              <button type="submit" className="text-white text-2xl font-medium">
                Meet our amazing team
              </button>
            </div>
          </Link>
        </div>
        <div className="//outline //outline-yellow-600 w-11/12 m-auto mt-5 h-fit ">
          <div className="mb-5">
            <h1 className="text-green-500 text-2xl font-medium">Gallery</h1>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Gallery.map((image) => (
              <div
                key={image.id}
                className="w-full //outline //outline-yellow-600 "
              >
                <Image
                  src={image.img}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="//outline //outline-yellow-600 w-11/12 m-auto mt-8 h-fit text-blue-700 text-2xl underline decoration-solid font-medium ">
          <a href="https://nia.gov.gh/registration-process/" target="blank">
            Registration Process
          </a>
        </div>
      </div>
    </div>
  );
}

export default District;
