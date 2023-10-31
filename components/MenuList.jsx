import React from "react";
import Link from "next/link";

function MenuList({ name, page }) {
  return (
    <div className="w-full h-1/5 //outline //outline-black flex justify-center items-center">
      <Link href={page}>{name}</Link>
    </div>
  );
}

export default MenuList;
