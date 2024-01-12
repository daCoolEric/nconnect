"use client";
import { setRole } from "@app/GlobalRedux/Features/signup/roleSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const roles = [
  {
    id: 1,
    role: "admin",
  },
  {
    id: 2,
    role: "manager",
  },
  {
    id: 3,
    role: "staff",
  },
];

function RoleSelector({ name }) {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.role.value);
  return (
    <div className="mt-2 " style={{ backgroundColor: "#FFFFFF" }}>
      <select
        value={role}
        onChange={(e) => {
          dispatch(setRole(e.target.value));
        }}
        className="block w-full rounded-md bg-transparent border border-green-400 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 //focus:ring-2 //focus:ring-inset focus:outline-green-500 sm:text-sm sm:leading-6"
      >
        {name === "role"
          ? roles.map((role) => (
              <option id={role.id} value={role.role}>
                {role.role}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default RoleSelector;
