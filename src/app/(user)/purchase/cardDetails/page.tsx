import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pt-8 px-4 bg-pageBackground xl:px-64">
        <a href="/shippingAddress">
          <Image
            src="/leftarrow.png"
            alt="Arrow"
            className="w-4"
            width={100}
            height={0}
            priority
          />
        </a>
        <h1 className="text-lg font-semibold">Card Details</h1>
        <p></p>
      </div>

      {/* ===Order Navbar=== */}
      <div className="flex justify-center items-center gap-12 pt-6 bg-gradient-to-b from-pageBackground to-white to-white px-16">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-lightThemeColor rounded-full p-2 w-12 h-12 flex justify-center items-center">
            <Image
              src="/location.png"
              alt="First Product Picture"
              className="w-6 rounded-lg"
              width={100}
              height={0}
              priority
            />
          </div>
          <p className="text-xs text-center text-themeColor">
            Shipping <br></br> Address
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-lightThemeColor rounded-full p-2 w-12 h-12 flex justify-center items-center">
            <Image
              src="/atmcard.png"
              alt="First Product Picture"
              className="w-6 rounded-lg"
              width={100}
              height={0}
              priority
            />
          </div>
          <p className="text-xs text-center text-themeColor">
            Card <br></br> Details
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-gray-200 rounded-full p-2 w-12 h-12 flex justify-center items-center">
            <Image
              src="/goodshield.png"
              alt="First Product Picture"
              className="w-6 rounded-lg"
              width={100}
              height={0}
              priority
            />
          </div>
          <p className="text-xs text-center text-gray-400">
            Order <br></br> Review
          </p>
        </div>
      </div>

      {/* ===Form=== */}
      <div className="px-4 xl:px-64">
        <p className="text-xs py-4 text-gray-400">
          You will not be charged until you review the order on the next page
        </p>
        <div className="flex flex-col mt-2">
          <label className="text-sm">Name on Card *</label>
          <input
            type="text"
            className="border border-themeColor px-4 py-1 rounded-md"
          />
        </div>

        <div className="flex flex-col mt-2">
          <label className="text-sm">Card Number *</label>
          <input
            type="text"
            className="border border-themeColor px-4 py-1 rounded-md"
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-4">
          <div className="flex flex-col mt-2 xl:w-3/6">
            <label className="text-sm">Expiration Date *</label>
            <input
              type="text"
              className="border border-themeColor px-4 py-1 rounded-md"
            />
          </div>

          <div className="flex flex-col mt-2 xl:w-3/6">
            <label className="text-sm">Security Code *</label>
            <input
              type="text"
              className="border border-themeColor px-4 py-1 rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-8">
        <a
          href="orderReview"
          className="bg-themeColor px-8 py-2 rounded-md text-white font-extrabold text-xs xl:text-sm"
        >
          Proceed
        </a>
      </div>

      <Footer />
    </div>
  );
}
