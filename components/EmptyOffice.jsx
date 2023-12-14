import React from "react";
import Button from "./Button";
import Image from "next/image";

function EmptyOffice() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/assets/images/emptyOffice.png"
          width={250}
          height={250}
          alt="Empty Office Image"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1>Looks like there is no office at the moment.</h1>
        <h2>
          Contact your Regional Registration Officer / District Registration
          Officer to create an office.
        </h2>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <div>
          <Button id="create_office" type="button" name="Create an Office" />
        </div>
      </div>
    </div>
  );
}

export default EmptyOffice;
