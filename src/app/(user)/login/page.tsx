"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "@/app/model/user";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    const login = await fetch("/api/login", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  };

  return (
    <div>
      <div className="w-full px-4 xl:px-44 py-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            alt="logo"
            className="w-16"
            width={100}
            height={0}
            priority
          />
          <h1 className="font-bold text-lg xl:text-xl">Moricol Organic Shop</h1>
        </div>
      </div>

      <div className="flex justify-center gap-16 items-start px-4 xl:px-44 mt-12 xl:mt-24">
        <div className="w-full hidden xl:flex">Organic products picture</div>
        <div className="w-full">
          <h1 className="text-3xl font-extrabold text-center mb-6">Sign In</h1>
          {/* ===Form=== */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mt-2">
              <label className="text-sm">Email</label>
              <input
                {...register("email", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-sm">Password</label>
              <input
                {...register("password", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
            </div>
            <button className="bg-themeColor py-2 w-full hover:bg-lightThemeColor text-white font-semibold text-sm rounded-md mt-4">
              Sign In
            </button>
          </form>
          <div className="flex justify-center items-center gap-2 text-sm mt-2">
            <p>Don't an account?</p>{" "}
            <Link href="/register" className="text-blue-500 font-semibold">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
