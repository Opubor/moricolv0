import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-pageBackground">
      <Navbar />
      <div className="xl:flex justify-center bg-white xl:mx-56 xl:my-8 pb-8 rounded-xl">
        {/* ===Product Pictures=== */}
        <div className="px-4 pt-4 xl:w-3/6">
          <Image
            src="/strawberry.webp"
            alt="Product Picture 1"
            className=" rounded-xl shadow-lg shadow-gray-200 bg-white"
            width={500}
            height={0}
            priority
          />
          <div className="flex justify-start items-center gap-2 mt-2">
            <Image
              src="/strawberry.webp"
              alt="Product Picture 1"
              className="rounded-xl w-24 border-2 border-themeColor shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/strawberry.webp"
              alt="Product Picture 1"
              className="w-24  rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/strawberry.webp"
              alt="Product Picture 1"
              className="w-24 rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        {/* ===Product details=== */}
        <div className="p-4 xl:w-3/6 pt-8">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold xl:font-extrabold xl:text-2xl">
              125ml D3 Organic Tea
            </h1>
            <h2 className="font-extrabold text-themeColor text-xl xl:text-2xl">
              &#8358;120
            </h2>
          </div>
          <div className="flex flex-col justify-between">
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
              <h1 className="font-bold">(5.0)</h1>
            </div>
            <h1 className="text-xs xl:text-sm font-light">
              size: <span className="font-bold text-sm xl:text-md">125ml</span>
            </h1>
          </div>
          <p className="text-gray-500 text-xs xl:text-sm mt-4 mb-4">
            Supper Immune Booster. Detoxifies | Cleanses toxic wastes.
            Antioxidants. Stem Cell Replicator. Anti-cancer. Strong
            Antibiotics.Helps in the treatment of all pathogenic infections.
            Energy booster. Organs renewal. Fortified with Vitamin C, Zinc and
            Iron to improve libido.
          </p>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4 xl:w-6"
              width={100}
              height={0}
              priority
            />
            <p className="font-semibold bg-lightThemeColor rounded-md px-2">
              2
            </p>
            <Image
              src="/shield.png"
              alt="Review star"
              className="w-4 xl:w-6"
              width={100}
              height={0}
              priority
            />
          </div>
          <button className="bg-themeColor p-2 w-full text-xs xl:text-sm font-bold hover:bg-lightThemeColor rounded-md mt-2 xl:mt-4 text-white">
            Add to Cart
          </button>
        </div>
      </div>

      {/* ===Reviews=== */}
      <div className="p-4 xl:p-8 bg-white rounded-lg xl:mx-56 xl:my-8">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Reviews</h1>
          <a className="text-themeColor text-xs font-semibold">+Add Review</a>
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
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border border-lightThemeColor"
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
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border border-lightThemeColor"
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
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border border-lightThemeColor"
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
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border border-lightThemeColor"
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
            className="mt-2 rounded-full bg-gray-50 px-4 py-1 text-xs w-full border border-lightThemeColor"
            placeholder="Reply..."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
