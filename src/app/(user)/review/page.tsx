import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-start items-center gap-2 px-8 xl:pt-16 pt-8 xl:px-60">
        <a href="/userProfile">
          <Image
            src="/leftarrow.png"
            alt="Arrow"
            className="w-4"
            width={100}
            height={0}
            priority
          />
        </a>
        <h1 className="font-bold text-lg">Reviews and Ratings</h1>
      </div>

      <div className="px-4 xl:px-56">
        <div className="mt-2 grid grid-cols-8 bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex flex-col col-span-2 items-center gap-1">
            <Image
              src="/item3.jpg"
              alt="First Product Picture"
              className="w-24 rounded-lg"
              width={100}
              height={0}
              priority
            />
            <h1 className="text-xs text-center">Fafaron bitters</h1>
            <h2 className="text-sm text-themeColor font-bold">&#8358;120</h2>
          </div>

          <div className="flex flex-col col-span-5 justify-start gap-2 h-full">
            <div>
              <p className="text-sm font-semibold">Rating</p>
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
            </div>
            <div>
              <p className="text-sm font-semibold">Review</p>
              <p className="text-xs text-gray-500">
                This product is lovely and meets every expectation. I've always
                loved it. It helps with smoother skin. The packaging is perfect
                for all. I hope they keep to this standard
              </p>
            </div>
          </div>

          <div className="flex justify-start col-span-1 items-start gap-2 p-2">
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
        <div className="mt-2 grid grid-cols-8 bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex flex-col col-span-2 items-center gap-1">
            <Image
              src="/item3.jpg"
              alt="First Product Picture"
              className="w-24 rounded-lg"
              width={100}
              height={0}
              priority
            />
            <h1 className="text-xs text-center">Fafaron bitters</h1>
            <h2 className="text-sm text-themeColor font-bold">&#8358;120</h2>
          </div>

          <div className="flex flex-col col-span-5 justify-start gap-2 h-full">
            <div>
              <p className="text-sm font-semibold">Rating</p>
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
            </div>
            <div>
              <p className="text-sm font-semibold">Review</p>
              <p className="text-xs text-gray-500">
                This product is lovely and meets every expectation. I've always
                loved it. It helps with smoother skin. The packaging is perfect
                for all. I hope they keep to this standard
              </p>
            </div>
          </div>

          <div className="flex justify-start col-span-1 items-start gap-2 p-2">
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
        <div className="mt-2 grid grid-cols-8 bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex flex-col col-span-2 items-center gap-1">
            <Image
              src="/item3.jpg"
              alt="First Product Picture"
              className="w-24 rounded-lg"
              width={100}
              height={0}
              priority
            />
            <h1 className="text-xs text-center">Fafaron bitters</h1>
            <h2 className="text-sm text-themeColor font-bold">&#8358;120</h2>
          </div>

          <div className="flex flex-col col-span-5 justify-start gap-2 h-full">
            <div>
              <p className="text-sm font-semibold">Rating</p>
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
            </div>
            <div>
              <p className="text-sm font-semibold">Review</p>
              <p className="text-xs text-gray-500">
                This product is lovely and meets every expectation. I've always
                loved it. It helps with smoother skin. The packaging is perfect
                for all. I hope they keep to this standard
              </p>
            </div>
          </div>

          <div className="flex justify-start col-span-1 items-start gap-2 p-2">
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
        <div className="mt-2 grid grid-cols-8 bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex flex-col col-span-2 items-center gap-1">
            <Image
              src="/item3.jpg"
              alt="First Product Picture"
              className="w-24 rounded-lg"
              width={100}
              height={0}
              priority
            />
            <h1 className="text-xs text-center">Fafaron bitters</h1>
            <h2 className="text-sm text-themeColor font-bold">&#8358;120</h2>
          </div>

          <div className="flex flex-col col-span-5 justify-start gap-2 h-full">
            <div>
              <p className="text-sm font-semibold">Rating</p>
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
            </div>
            <div>
              <p className="text-sm font-semibold">Review</p>
              <p className="text-xs text-gray-500">
                This product is lovely and meets every expectation. I've always
                loved it. It helps with smoother skin. The packaging is perfect
                for all. I hope they keep to this standard
              </p>
            </div>
          </div>

          <div className="flex justify-start col-span-1 items-start gap-2 p-2">
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
        <div className="mt-2 grid grid-cols-8 bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex flex-col col-span-2 items-center gap-1">
            <Image
              src="/item3.jpg"
              alt="First Product Picture"
              className="w-24 rounded-lg"
              width={100}
              height={0}
              priority
            />
            <h1 className="text-xs text-center">Fafaron bitters</h1>
            <h2 className="text-sm text-themeColor font-bold">&#8358;120</h2>
          </div>

          <div className="flex flex-col col-span-5 justify-start gap-2 h-full">
            <div>
              <p className="text-sm font-semibold">Rating</p>
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
            </div>
            <div>
              <p className="text-sm font-semibold">Review</p>
              <p className="text-xs text-gray-500">
                This product is lovely and meets every expectation. I've always
                loved it. It helps with smoother skin. The packaging is perfect
                for all. I hope they keep to this standard
              </p>
            </div>
          </div>

          <div className="flex justify-start col-span-1 items-start gap-2 p-2">
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
      </div>
    </div>
  );
}
