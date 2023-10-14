"use client";
import React from "react";
import Link from "next/link";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "@/app/model/product";

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/admin/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryName: data.categoryName,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      {/* ===Add Product Form=== */}
      <div className="bg-white rounded-lg p-4 w-full">
        {/* ===inputs=== */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs font-semibold">Category Name</label>
            <input
              {...register("categoryName", { required: true })}
              className="border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.categoryName && (
              <p className="text-red-500 text-xs">Category name is required.</p>
            )}
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button className="bg-themeColor hover:bg-lightThemeColor hover:font-bold px-12 py-2 text-white text-sm rounded-md">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Page;
