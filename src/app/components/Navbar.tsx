"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [bg, setBg] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className={`bg-white`}>
      {/* ===First Navbar=== */}
      <div className="flex justify-between items-center p-2 xl:px-40 border-b border-b-gray-200">
        <div className="flex items-center gap-2 text-xs">
          <h1 className="hidden xl:flex">
            House 2, Road 4 Abraham Adesanyan Estate Ajah Lekki
          </h1>
          <div className="flex items-center">
            <Image
              src="/phone.png"
              alt="phone"
              className="w-4"
              width={100}
              height={24}
              priority
            />
            <p> +2348093024826</p>{" "}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/register"
            className="text-xs px-4 py-2 bg-themeColor rounded-md text-white shadow-lg shadow-gray-100"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="text-xs px-4 py-2 bg-white rounded-md text-themeColor shadow-lg shadow-gray-100 border border-themeColor"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* ===Second Navbar=== */}
      <div className=" bg-pageBackground flex flex-col xl:flex-row justify-between items-center gap-0 xl:gap-4 border-b border-b-gray-200 py-2 xl:py-4 px-2 xl:px-40">
        <div className="w-full flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="Moricol Logo"
            className="w-12 xl:w-32"
            width={100}
            height={24}
            priority
          />
          <h1 className="font-extrabold text-xl xl:text-3xl text-gray-800">
            Moricol Organic Shop
          </h1>
        </div>

        {/* ===Search bar=== */}
        <div className="flex justify-between items-center w-full gap-4">
          <div className="w-full flex items-center justify-between gap-1 xl:gap-2 py-1">
            <input
              type="search"
              className="px-4 py-1 xl:py-2 border-2 bg-gray-50 border-themeColor focus:outline-lightThemeColor w-full text-xs text-black rounded-md"
            />
            <a
              href="/searchResult"
              className="bg-lightThemeColor rounded-md p-2 xl:p-3 hover:bg-themeColor"
            >
              <Image
                src="/search.png"
                alt="Search"
                className="w-4 h-4"
                width={100}
                height={0}
                priority
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/cart">
              <Image
                src="/cart.png"
                alt="Shopping Cart"
                className="w-8"
                width={100}
                height={0}
                priority
              />
            </Link>
            <Image
              src="/bell.png"
              alt="Notification"
              className="w-8"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>
      </div>

      {/* ===Third Navbar=== */}
      <div
        className={`flex justify-between items-center p-2 border-b border-b-gray-200 xl:px-40 ${
          bg
            ? "fixed top-0 left-0 right-0 bg-white shadow-sm shadow-gray-50 border-b-0"
            : ""
        }`}
      >
        <div>
          <Link
            href=""
            className="flex items-center gap-2 bg-white xl:bg-pageBackground px-2 xl:px-8 py-2 font-semibold text-sm rounded-md"
          >
            <Image
              src="/bar.png"
              alt="Bar"
              className="w-6"
              width={100}
              height={0}
              priority
            />
            <p className="hidden xl:flex">Categories</p>
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-2 xl:gap-3 text-xs xl:text-sm font-semibold text-gray-700">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/order">My orders</Link>
            </li>
            <li>
              <Link href="/aboutUs">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="text-xs xl:text-sm flex items-center gap-1 px-2">
          <Image
            src="/bell.png"
            alt="Notification"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <Link href="/notifications" className="hidden xl:flex">
            Notifications
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
