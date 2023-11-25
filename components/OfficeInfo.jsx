import Image from "next/image";
import React from "react";

function OfficeInfo({ source, alt, data }) {
  return (
    <div className="w-full mt-4">
      <div className="w-full flex flex-row ">
        <div className="w-2/12">
          <Image
            src={source}
            width={40}
            height={40}
            alt={alt}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="w-10/12">{data}</div>
      </div>
    </div>
  );
}

export default OfficeInfo;
