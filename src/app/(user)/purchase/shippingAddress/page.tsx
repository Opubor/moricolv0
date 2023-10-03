import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pt-8 px-4 bg-pageBackground xl:px-64">
        <a href="/cart">
          <Image
            src="/leftarrow.png"
            alt="Arrow"
            className="w-4"
            width={100}
            height={0}
            priority
          />
        </a>
        <h1 className="text-lg font-semibold">Shipping Address</h1>
        <p></p>
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
          <div className="bg-gray-200 rounded-full p-2 w-12 h-12 flex justify-center items-center">
            <Image
              src="/atmcard.png"
              alt="First Product Picture"
              className="w-6 rounded-lg"
              width={100}
              height={0}
              priority
            />
          </div>
          <p className="text-xs text-center text-gray-400">
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

      {/* ===Delivery Addresses=== */}
      <div className="m-4 p-4 rounded-lg shadow-lg shadow-gray-200 xl:px-64">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-md">Delivery Addresses</h1>
          <a
            href="/addAddress"
            className="text-themeColor text-xs xl:text-sm font-extrabold"
          >
            +Add Address
          </a>
        </div>

        <div className="bg-gray-50 flex justify-between rounded-lg p-4 border border-themeColor mt-2">
          <div className=" text-xs">
            <p>Adams Obi</p>
            <p>No. 9 Odim Nsukka road</p>
            <p>Nsukka, Lagos</p>
            <p>Nigeria</p>
            <p>091230901232</p>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Image
              src="/edit.png"
              alt="edit"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/delete.png"
              alt="delete"
              className="w-3"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div className="bg-gray-50 flex justify-between rounded-lg p-4 border border-gray-200 mt-2">
          <div className=" text-xs">
            <p>Adams Obi</p>
            <p>No. 9 Odim Nsukka road</p>
            <p>Nsukka, Lagos</p>
            <p>Nigeria</p>
            <p>091230901232</p>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Image
              src="/edit.png"
              alt="edit"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/delete.png"
              alt="delete"
              className="w-3"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div className="bg-gray-50 flex justify-between rounded-lg p-4 border border-gray-200 mt-2">
          <div className=" text-xs">
            <p>Adams Obi</p>
            <p>No. 9 Odim Nsukka road</p>
            <p>Nsukka, Lagos</p>
            <p>Nigeria</p>
            <p>091230901232</p>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Image
              src="/edit.png"
              alt="edit"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/delete.png"
              alt="delete"
              className="w-3"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div className="bg-gray-50 flex justify-between rounded-lg p-4 border border-gray-200 mt-2">
          <div className=" text-xs">
            <p>Adams Obi</p>
            <p>No. 9 Odim Nsukka road</p>
            <p>Nsukka, Lagos</p>
            <p>Nigeria</p>
            <p>091230901232</p>
          </div>
          <div className="flex justify-start items-start gap-2">
            <Image
              src="/edit.png"
              alt="edit"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/delete.png"
              alt="delete"
              className="w-3"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div className="flex justify-center items-center my-8">
          <a
            href="/cardDetails"
            className="bg-themeColor px-8 py-2 rounded-md text-white font-bold text-xs xl:text-sm"
          >
            Proceed to Payment
          </a>
        </div>
      </div>

      {/* ===Footer=== */}
      <Footer />
    </div>
  );
}
