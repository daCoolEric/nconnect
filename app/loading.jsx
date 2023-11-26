import React from "react";
import ExploreSkeleton from "./loaders/ExploreSkeleton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { regionDB } from "@utils/regions";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      Loading ...
    </div>
  );
}

export default Loading;
