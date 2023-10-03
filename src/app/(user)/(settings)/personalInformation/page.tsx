import Input from "@/app/components/Input";
import SettingsSidebar from "@/app/components/SettingsSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between items-start gap-4 ">
      <SettingsSidebar />

      {/* ===Main Section=== */}
      <div className="w-full xl:w-10/12 pt-16">
        <h1 className="border-b-2 border-b-pageBackground text-2xl font-bold">
          Personal Information
        </h1>
        <div className="p-8">
          <div className="flex justify-center items-center">
            <Image
              src="/user-01.png"
              alt="Profile Picture"
              className="w-12 xl:w-32"
              width={1000}
              height={24}
              priority
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-4 xl:mt-4 w-full">
            <Input />
            <Input />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-4 xl:mt-4 w-full">
            <Input />
            <Input />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 xl:gap-4 xl:mt-4 w-full">
            <Input />
            <Input />
          </div>
          <div className="flex justify-between items-center gap-4 xl:mt-4 w-full">
            <Input />
          </div>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-themeColor px-8 py-2 text-sm rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
