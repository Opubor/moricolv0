import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* ===Header=== */}
      <Navbar />

      {/* ===About Us=== */}
      <h1 className="font-bold text-md xl:text-2xl text-center py-3">
        MORICOL Afrofood & Supplement Store
      </h1>
      <Image
        src="/moricolbanner.jpeg"
        alt="Moricol Banner"
        className="w-full h-[400px]"
        width={3000}
        height={0}
        priority
      />

      {/* ===What We Sell=== */}
      <div className="p-4 border-b-2 xl:border-0 border-b-gray-200 xl:px-56">
        <h1 className="text-themeColor font-bold text-md xl:text-2xl">
          What We Sell
        </h1>
        <p className="text-xs xl:text-sm mt-2 px-2">
          Our products have higher levels of antioxidants found in certain
          organic foods, which can help strengthen our immune systems and
          contribute to better overall health.{" "}
        </p>
        <p className="text-xs xl:text-sm mt-2 px-2">
          Our products are free from toxic chemicals harmful to our body
          systems. Improved heart condition and rich in antioxidant. Our
          products have better taste. Stronger immune system.
        </p>
      </div>

      {/* ===What we Offer=== */}
      <div className="p-4 border-b-2 xl:border-0 border-b-gray-200 xl:px-56">
        <h1 className="text-themeColor font-bold text-md xl:text-2xl">
          What we Offer
        </h1>
        <p className="text-xs xl:text-sm mt-2 px-2">
          Free yourselves from pesticides in ordinary food production.{" "}
        </p>
        <p className="text-xs xl:text-sm mt-2 px-2">
          You want to reduce your weight healthily, use our supplements.
        </p>
        <p className="text-xs xl:text-sm mt-2 px-2">
          Old age comes with several challenges, but with our products, dead
          cells are rejuvenated to keep you stronger and healthier
        </p>
      </div>

      {/* ===Terms and Policy=== */}
      <div className="p-4 pb-8 xl:px-56">
        <h1 className="text-themeColor font-bold text-md xl:text-2xl">
          Terms and Policy
        </h1>
        <p className="text-xs xl:text-sm mt-2 px-2">
          Simply dial 0700-600-0000 to reach out to us. We have a dedicated team
          that is always available to make sure your shopping experience on is
          effortless. You can call 0700-600-0000 to help you resolve a
          complaint, to place an order or to track an already existing order.
          You can also chat with us on the app if you find that more convenient.
          Whatever you do, we are always available to help.
        </p>
      </div>

      {/* ===Reviews== */}
      {/* <div className="bg-pageBackground p-4 xl:px-56">
        <h1 className="text-themeColor font-bold text-md">Reviews</h1>
        <div className="mt-2">
          <h1 className="text-sm font-bold">Loisa David</h1>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>

          <p className="text-xs">
            This product checked all the boxes. Worked exactly as described. I
            totally recommend.
          </p>
          <input
            type="search"
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border-2 border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-bold">Loisa David</h1>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>

          <p className="text-xs">
            This product checked all the boxes. Worked exactly as described. I
            totally recommend.
          </p>
          <input
            type="search"
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border-2 border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-bold">Loisa David</h1>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>

          <p className="text-xs">
            This product checked all the boxes. Worked exactly as described. I
            totally recommend.
          </p>
          <input
            type="search"
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border-2 border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-bold">Loisa David</h1>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>

          <p className="text-xs">
            This product checked all the boxes. Worked exactly as described. I
            totally recommend.
          </p>
          <input
            type="search"
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border-2 border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
        <div className="mt-2">
          <h1 className="text-sm font-bold">Loisa David</h1>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>

          <p className="text-xs">
            This product checked all the boxes. Worked exactly as described. I
            totally recommend.
          </p>
          <input
            type="search"
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border-2 border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
      </div> */}

      {/* ===Footer=== */}
      <Footer />
    </div>
  );
}
