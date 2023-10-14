"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { registerUserSchema } from "@/app/model/user";
import { zodResolver } from "@hookform/resolvers/zod";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserSchema),
  });

  //   let user: null | {age: number, name: string} = null

  //   user = {age:40, name:'4343', time:'sdsd'}

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.role,
        email: data.email,
        password: data.password,
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
          <h1 className="text-3xl font-extrabold text-center mb-6">Register</h1>
          {/* ===Form=== */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              value="customer"
              {...register("role", { required: true })}
            />
            <div className="flex flex-col mt-2">
              <label className="text-sm">First Name</label>
              <input
                {...register("firstName", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">First name is required.</p>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-sm">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">Last name is required.</p>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-sm">Email</label>
              <input
                {...register("email", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">E-Mail is required.</p>
              )}
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-sm">Password</label>
              <input
                {...register("password", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">Password is required.</p>
              )}
            </div>
            <button className="bg-themeColor py-2 w-full hover:bg-lightThemeColor text-white font-semibold text-sm rounded-md mt-4">
              Register
            </button>
          </form>
          <div className="flex justify-center items-center gap-2 text-sm mt-2">
            <p>Already have an account?</p>{" "}
            <Link href="/login" className="text-blue-500 font-semibold">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
