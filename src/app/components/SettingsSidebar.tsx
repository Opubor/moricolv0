import Link from "next/link";
import React from "react";

function SettingsSidebar() {
  return (
    <div className="w-2/12 border-r-2 border-r-gray-200 h-screen px-8 pt-16 bg-pageBackground hidden xl:block">
      <h1 className=" font-bold text-lg">Manage your Account</h1>
      <ul className="flex flex-col gap-4 justify-start items-start text-sm pt-8">
        <li>
          <Link href="userProfile">Profile</Link>
        </li>
        <li>
          <Link href="personalInformation">Personal Information</Link>
        </li>
        <li>
          <Link href="">Shipping Address</Link>
        </li>
        <li>
          <Link href="">Reviews and ratings</Link>
        </li>
        <li>
          <Link href="">Order History</Link>
        </li>
        <li>
          <Link href="">Privacy</Link>
        </li>
        <li>
          <Link href="">Security</Link>
        </li>
      </ul>
    </div>
  );
}

export default SettingsSidebar;
