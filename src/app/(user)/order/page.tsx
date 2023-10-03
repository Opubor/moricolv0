import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pageBackground">
      {/* ===Header=== */}
      <Navbar />

      {/* ===Orders=== */}
      <div className="p-4 xl:px-56">
        <h1 className="text-xl lg:text-2xl text-gray-700 font-extrabold px-4">
          Orders
        </h1>
        {/* ===Order Header=== */}

        {/* ===Order Details=== */}
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-end justify-end px-4">
              <p className="text-red-500 font-bold text-sm">Pending</p>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg shadow-gray-100 mt-2 border border-gray-100">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-start items-center gap-2">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-12 xl:w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <div className="flex flex-col justify-start gap-4 xl:gap-6 h-full">
                <p className="text-xs">4 Items</p>
                <p className="text-lg text-themeColor font-bold">&#8358;250</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-700">3rd August 2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* ===Footer=== */}
      <Footer />
    </div>
  );
}
