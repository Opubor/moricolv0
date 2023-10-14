import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      {/* ===Header=== */}
      <div className="pt-2">
        {/* ===Navbar=== */}
        <Navbar />
      </div>

      {/* ===Search bar=== */}
      {/* <div className="px-2 flex items-center justify-between gap-2 py-1 xl:px-40">
        <input
          type="search"
          className="px-4 py-1 border-2 border-themeColor focus:outline-lightThemeColor w-full text-xs text-black rounded-lg"
        />
        <a
          href="/searchResult"
          className="bg-lightThemeColor rounded-xl p-2 hover:bg-themeColor"
        >
          <Image
            src="/search.png"
            alt="Search"
            className="w-4 h-4"
            width={100}
            height={0}
            priority
          />
        </a>
      </div> */}

      {/* ===Category Results=== */}
      <div className="pb-4">
        <div className="flex justify-between px-4 py-4 xl:px-40 gap-4">
          <div className="w-1/5 rounded-md p-4">
            <h1 className="text-lg font-bold border-b-2 border-b-themeColor text-gray-700">
              Top Categories
            </h1>
            <div className="flex flex-col items-start gap-3 text-sm py-4 font-semibold text-gray-700">
              <Link href="">Men's health</Link>
              <Link href="">Immune boosters</Link>
              <Link href="">Groceries</Link>
              <Link href="">Dairy</Link>
              <Link href="">Women's Health</Link>
              <Link href="">Catering</Link>
              <Link href="">Health & beauty</Link>
              <Link href="">Drinks</Link>
              <Link href="">Fish, Meat & Poultry</Link>
              <Link href="">Bone & Joint care</Link>
            </div>
          </div>

          <div className="w-4/5">
            {/* ===Current Category=== */}
            <div className="">
              <h1 className="font-bold text-lg xl:text-2xl text-gray-700">
                Men's Health
              </h1>
              <p className="font-light text-xs xl:text-sm text-gray-500">
                Best collection for optimum health
              </p>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="px-8 py-2 rounded-md text-white font-bold bg-themeColor text-xs">
            Load More...
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
