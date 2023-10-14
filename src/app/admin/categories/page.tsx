import React from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/Ai";
import { BsSortDownAlt } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { PiExport } from "react-icons/pi";
import ProductCard from "@/app/components/ProductCard";
import prisma from "@/app/lib/prisma-client";

function getCategories() {
  return prisma.category.findMany();
}

async function Page() {
  const categories = await getCategories();
  // const categories = async () => {
  //   await fetch("/admin/api/category", {
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      {/* ===Page Name=== */}
      <div className="flex justify-start items-center gap-2 my-2">
        <div>
          <Link
            href="/admin/categories"
            className="bg-themeColor px-12 py-2 rounded-md text-sm font-semibold text-white"
          >
            Categories
          </Link>
        </div>
        <div>
          <Link
            href="/admin/categories/add_category"
            className="bg-white px-12 py-2 rounded-md text-sm font-semibold text-themeColor"
          >
            Add Category
          </Link>
        </div>
      </div>

      {/* ===Actions */}
      <div className="flex justify-between items-center gap-64 w-full">
        <div className="flex justify-start items-center gap-2 w-5/6">
          <input className="bg-white rounded-full border border-themeColor px-4 py-2 w-full text-sm" />
          <button className="bg-white border border-themeColor p-2 rounded-full">
            <div>{React.createElement(AiOutlineSearch, { size: "20" })}</div>
          </button>
        </div>
        <div className="flex bg-white border border-gray-300 items-end gap-0 ">
          <div className="p-2 border-r border-r-gray-300">
            <div>{React.createElement(BiFilterAlt, { size: "20" })}</div>
          </div>
          <div className="p-2 border-r border-r-gray-300">
            <div>{React.createElement(BsSortDownAlt, { size: "20" })}</div>
          </div>
          <div className="p-2">
            <div>{React.createElement(PiExport, { size: "20" })}</div>
          </div>
        </div>
      </div>

      {/* ===Table=== */}
      <div className="bg-white rounded-lg py-4 w-full">
        <table className="w-full">
          <thead className="bg-gray-50 text-md">
            <tr>
              <th className="py-2">S/N</th>
              <th>Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {categories.map((category) => (
              <div key={category.id}>
                <tr className="text-center py-4 hover:bg-gray-50">
                  <td className="py-2">1</td>
                  <td>{category.categoryName}</td>
                  <td></td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Page;
