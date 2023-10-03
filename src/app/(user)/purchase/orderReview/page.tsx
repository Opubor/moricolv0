import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pt-8 px-4 bg-pageBackground xl:px-64">
        <a href="/cardDetails">
          <Image
            src="/leftarrow.png"
            alt="Arrow"
            className="w-4"
            width={100}
            height={0}
            priority
          />
        </a>
        <h1 className="text-lg font-semibold">Order Review</h1>
        <p className="font-bold"></p>
      </div>

      {/* ===Order Navbar=== */}
      <div className="flex justify-center items-center gap-12 pt-6 bg-gradient-to-b from-pageBackground to-white px-16">
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
          <div className="bg-lightThemeColor rounded-full p-2 w-12 h-12 flex justify-center items-center">
            <Image
              src="/goodshield.png"
              alt="First Product Picture"
              className="w-6 rounded-lg"
              width={100}
              height={0}
              priority
            />
          </div>
          <p className="text-xs text-center text-themeColor">
            Order <br></br> Review
          </p>
        </div>
      </div>

      {/* ===Review=== */}
      <div className="px-4 xl:px-64">
        <div className="p-4">
          <p className="text-xs py-4 text-gray-400">
            By clicking submit order, you agree to Moricol’s Terms of use and
            privacy policy
          </p>

          {/* ===Shipping Address=== */}
          <div className="p-4 border border-gray-300 mt-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Shipping Address</h1>
              <a className="text-themeColor font-bold text-sm">+Edit</a>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Name</p>
              <p className="text-semibold">Adams Obi</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Street</p>
              <p className="text-semibold">No. 9 Odim Nsukka road</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Location</p>
              <p className="text-semibold">Nsukka, Lagos</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Country</p>
              <p className="text-semibold">Nigeria</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Phone Number</p>
              <p className="text-semibold">09123454309</p>
            </div>
          </div>

          {/* ===Card Details=== */}
          <div className="p-4 border border-gray-300 mt-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h1 className="text-md font-semibold">Card Details</h1>
              <a className="text-themeColor font-bold text-sm">+Edit</a>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Name</p>
              <p className="text-semibold">Adams Obi</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Card Number</p>
              <p className="text-semibold">9012 2039 2920 293</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">Exp. Date</p>
              <p className="text-semibold">11/12/12</p>
            </div>

            <div className="flex justify-between items-center mt-1 text-sm">
              <p className="text-gray-500">CVV</p>
              <p className="text-semibold">121</p>
            </div>

            <p className="font-semibold text-md text-center mt-2">VISA</p>
          </div>

          {/* ===Order Summary=== */}
          <div className="mt-4 bg-gray-100 p-4">
            <h1 className="text-md font-semibold">Order Summary</h1>

            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500">No. of Items</p>
              <p className="">8</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500">Subtotal</p>
              <p className="">&#8358;890</p>
            </div>

            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-500">Delivery Fee</p>
              <p className="">&#8358;200</p>
            </div>

            <div className="flex justify-between items-center mt-2 border-t border-t-gray-400">
              <p className="">Total</p>
              <p className="font-bold text-lg xl:text-xl">&#8358;1090</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 mb-8">
          <a className="bg-themeColor px-8 py-2 rounded-md text-white text-xs xl:text-sm">
            Submit Order
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
