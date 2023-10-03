import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="flex justify-between items-center pt-8 px-4 bg-pageBackground">
        <Image
          src="/leftarrow.png"
          alt="Arrow"
          className="w-4"
          width={100}
          height={0}
          priority
        />
        <h1 className="text-lg font-semibold">Shopping Cart</h1>
        <p className="font-bold">...</p>
      </div> */}
      <Navbar />

      <div className="bg-pageBackground p-4 xl:px-64">
        {/* ===Cart Details=== */}
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-8 h-full">
              <div>
                <p className="text-sm font-semibold">125ml D3 Organic Tea</p>
                <p className="text-xs text-gray-500">&#8358;120 x 3</p>
              </div>
              <p className="text-xl font-bold text-themeColor">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-10 h-full">
            <div className="flex justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <p>3</p>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-8 h-full">
              <div>
                <p className="text-sm font-semibold">125ml D3 Organic Tea</p>
                <p className="text-xs text-gray-500">&#8358;120 x 3</p>
              </div>
              <p className="text-xl font-bold text-themeColor">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-10 h-full">
            <div className="flex justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <p>3</p>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-8 h-full">
              <div>
                <p className="text-sm font-semibold">125ml D3 Organic Tea</p>
                <p className="text-xs text-gray-500">&#8358;120 x 3</p>
              </div>
              <p className="text-xl font-bold text-themeColor">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-10 h-full">
            <div className="flex justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <p>3</p>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-8 h-full">
              <div>
                <p className="text-sm font-semibold">125ml D3 Organic Tea</p>
                <p className="text-xs text-gray-500">&#8358;120 x 3</p>
              </div>
              <p className="text-xl font-bold text-themeColor">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-10 h-full">
            <div className="flex justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <p>3</p>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-24 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-8 h-full">
              <div>
                <p className="text-sm font-semibold">125ml D3 Organic Tea</p>
                <p className="text-xs text-gray-500">&#8358;120 x 3</p>
              </div>
              <p className="text-xl font-bold text-themeColor">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-10 h-full">
            <div className="flex justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex items-center gap-2 justify-end">
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
              <p>3</p>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-4 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pageBackground w-full flex justify-center items-center gap-4 xl:gap-48 py-4 my-6">
        <div className="text-xl xl:text-3xl font-bold">
          <span className="text-sm">&#8358;</span>1440
        </div>
        <div>
          <a
            href="/shippingAddress"
            className="bg-themeColor text-white font-bold px-8 py-2"
          >
            Check Out
          </a>
        </div>
      </div>

      {/* ===Footer=== */}
      <Footer />
    </div>
  );
}
