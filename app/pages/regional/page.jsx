"use client";
import Link from "next/link";

const regional = () => {
  return (
    <div className="h-3/4 w-screen  //outline //outline-black">
      <div
        className=" flex justify-evenly flex-col items-center //outline //outline-black"
        style={{ height: "90%" }}
      >
        <div className="mt-44">
          <div
            className="w-11/12 text-2xl text-green-600 font-medium mt-7 text-center"
            // style={{ color: "#339B20" }}
          >
            All Regional & District Offices
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Ashanti
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Greater Accra
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Bono
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Bono East
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Central
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Ahafo
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Eastern
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Northern
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Savannah
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              North East
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Upper East
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Upper West
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Volta
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Oti
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Western
            </button>
            <button className="bg-green-600 p-5 rounded-lg text-slate-50 font-semibold">
              Western North
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default regional;
