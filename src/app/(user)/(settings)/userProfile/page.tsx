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
          Profile
        </h1>
        <div className="py-12 flex flex-col xl:flex-row justify-between items-center border-b-2 border-b-pageBackground">
          <div className="w-5/5 xl:w-1/5 flex flex-col justify-center items-center">
            <Image
              src="/user-01.png"
              alt="Profile Picture"
              className="w-12 xl:w-32"
              width={1000}
              height={24}
              priority
            />
            <p className="font-semibold text-center text-md">David Tom</p>
          </div>
          <div className="w-2/5">
            <div className="mb-8">
              <h1 className="text-gray-500">ID</h1>
              <p className="text-md font-semibold">1020QW</p>
            </div>
            <div>
              <h1 className="text-gray-500">E-Mail</h1>
              <p className="text-md font-semibold">1020QW</p>
            </div>
          </div>
          <div className="w-2/5">
            <div className="mb-8">
              <h1 className="text-gray-500">Phone Number</h1>
              <p className="text-md font-semibold">09123409203</p>
            </div>
            <div>
              <h1 className="text-gray-500">Shipping Address</h1>
              <p className="text-md font-semibold">
                No 2 Abimbola street Lagos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-pageBackground min-h-screen">
    //   <div className="flex justify-between items-center p-4">
    //     <Image
    //       src="/bar.png"
    //       alt="Bar"
    //       className="w-6"
    //       width={100}
    //       height={0}
    //       priority
    //     />
    //     <Image
    //       src="/settings.png"
    //       alt="Settings"
    //       className="w-6"
    //       width={100}
    //       height={0}
    //       priority
    //     />
    //   </div>

    //   <div className="flex flex-col justify-center items-center">
    //     <Image
    //       src="/user-01.png"
    //       alt="Profile picture"
    //       className="w-24 rounded-full"
    //       width={100}
    //       height={0}
    //       priority
    //     />
    //     <h1 className="text-md font-bold">David Samuel</h1>
    //     <h2 className="text-xs">davidsamuel@gmail.com</h2>
    //     <a className="px-8 py-1 bg-themeColor text-white font-bold rounded-md text-xs mt-2">
    //       Edit Profile
    //     </a>
    //   </div>

    //   <div className="grid grid-cols-2 gap-4 px-4 mt-6 xl:px-56">
    //     <a className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg">
    //       Orders
    //     </a>
    //     <a
    //       href="/wishlist"
    //       className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg"
    //     >
    //       Wishlist
    //     </a>
    //     <a className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg">
    //       Cart
    //     </a>
    //     <a className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg">
    //       Notifications
    //     </a>
    //     <a className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg">
    //       Shipping Address
    //     </a>
    //     <a
    //       href="/review"
    //       className="bg-themeColor text-white text-xl font-semibold text-center py-8 rounded-lg"
    //     >
    //       Ratings and Reviews
    //     </a>
    //   </div>
    // </div>
  );
}
