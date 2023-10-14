"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { BsBoxes, BsCreditCard, BsPeople, BsSortDownAlt } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { BiBell, BiFilterAlt } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiExport } from "react-icons/pi";
import { link } from "joi";
function Sidebar() {
  const navLink = [
    { name: "Dashboard", path: "/dashboard", icon: LuLayoutDashboard },
    {
      name: "Products",
      path: "/admin/products",
      icon: BsBoxes,
    },
    {
      name: "Orders",
      path: "/test_management",
      icon: AiOutlineShoppingCart,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: MdOutlineCategory,
    },
    { name: "Promotions", path: "/test_report", icon: PiAirplaneTakeoffLight },
    { name: "Accounts", path: "/profile", icon: BsCreditCard },
    { name: "Customers", path: "/profile", icon: BsPeople },
    { name: "Staffs", path: "/profile", icon: IoPeopleCircleOutline },
    { name: "Shipping details", path: "/profile", icon: LiaShippingFastSolid },
    { name: "Settings", path: "/profile", icon: LuSettings },
  ];
  return (
    <div className="w-1/6 bg-themeColor rounded-3xl pl-8 h-screen">
      <div className="flex justify-start items-center gap-2 py-8">
        <Image
          src="/logo.jpeg"
          alt="logo"
          className="w-8"
          width={100}
          height={24}
          priority
        />
        <h1 className="text-white text-xl font-semibold">MORICOL</h1>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        {navLink?.map((link) => (
          <Link
            key={link.name}
            href={link?.path}
            className="text-white text-sm p-2 flex items-center gap-2"
          >
            <div>{React.createElement(link?.icon, { size: "20" })}</div>
            <h1>{link.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
