import React from "react";
import Input from "@/app/components/Input";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <>
      {/* ===Page Name=== */}
      <div className="flex justify-start items-center gap-2 my-2">
        <div>
          <Link
            href="/admin/products"
            className="bg-white px-12 py-2 rounded-md text-sm text-themeColor"
          >
            Products
          </Link>
        </div>
        <div>
          <Link
            href="/admin/products/add_product"
            className="bg-themeColor px-12 py-2 rounded-md text-sm text-white"
          >
            Add Products
          </Link>
        </div>
      </div>

      {/* ===Add Product Form=== */}
      <div className="bg-white rounded-lg p-4 w-full">
        {/* ===pictures=== */}
        <div className="flex justify-start items-center gap-4">
          <div className="bg-white p-4 border-2 border-gray-200 rounded-md">
            <Image
              src="/geisha.webp"
              alt="profile picture"
              className="w-8"
              width={100}
              height={24}
              priority
            />
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-md">
            <Image
              src="/geisha.webp"
              alt="Prosuct picture"
              className="w-24"
              width={100}
              height={24}
              priority
            />
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-md">
            <Image
              src="/geisha.webp"
              alt="Prosuct picture"
              className="w-24"
              width={100}
              height={24}
              priority
            />
          </div>
          <div className="bg-white border-2 border-gray-200 rounded-md">
            <Image
              src="/geisha.webp"
              alt="Prosuct picture"
              className="w-24"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
        {/* ===inputs=== */}
        <div className="flex justify-between items-center gap-4 mt-4">
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Name</label>
            <input className="border border-themeColor px-2 py-1 rounded-md" />
          </div>
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Category</label>
            <input className="border border-themeColor px-2 py-1 rounded-md" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 mt-4">
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Price</label>
            <input className="border border-themeColor px-2 py-1 rounded-md" />
          </div>
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Shipping fee</label>
            <input className="border border-themeColor px-2 py-1 rounded-md" />
          </div>
        </div>

        <h1 className="mt-4 font-semibold">Optional details</h1>
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Size</label>
            <input className="border border-themeColor px-2 py-1 rounded-md" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 mt-4">
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Description</label>
            <textarea className="border border-themeColor px-2 py-1 rounded-md"></textarea>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button className="bg-themeColor hover:bg-lightThemeColor hover:font-bold px-12 py-2 text-white text-sm rounded-md">
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
