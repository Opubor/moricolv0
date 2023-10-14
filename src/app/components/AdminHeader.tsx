"use client";
import Image from "next/image";
import React from "react";
import { BiBell } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

function AdminHeader() {
  return (
    <div className="bg-white rounded-3xl p-4 flex justify-between items-center w-full">
      <div className="flex justify-start items-center gap-2">
        <Image
          src="/user-03.png"
          alt="profile picture"
          className="w-12"
          width={100}
          height={24}
          priority
        />
        <div>
          <h1 className="text-lg font-semibold">Hello Louisa</h1>
          <h2 className="text-sm font-light">Accountant</h2>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2">
        <div>{React.createElement(BiBell, { size: "20" })}</div>
        <div>{React.createElement(IoMdArrowDropdown, { size: "20" })}</div>
      </div>
    </div>
  );
}

export default AdminHeader;
