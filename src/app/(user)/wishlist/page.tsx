import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-start items-center gap-2 px-8 pt-8 lg:pt-16 xl:px-60">
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
        <h1 className="font-bold text-lg">Wishlist</h1>
      </div>

      <div className="px-4 xl:px-56">
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center bg-white rounded-lg shadow-lg shadow-gray-200 border border-gray-100 p-2">
          <div className="flex justify-start gap-2">
            <div>
              <Image
                src="/item3.jpg"
                alt="First Product Picture"
                className="w-20 rounded-lg"
                width={100}
                height={0}
                priority
              />
            </div>
            <div className="flex flex-col justify-start gap-6 h-full w-24">
              <div>
                <p className="text-sm font-semibold truncate w-[10rem]">
                  125ml D3 Organic Tea
                </p>
              </div>
              <p className="text-md font-bold text-gray-500">&#8358;360</p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-6 h-full">
            <div className="flex justify-end px-4">
              <Image
                src="/cancel.png"
                alt="cancel"
                className="w-2"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="bg-themeColor text-white font-bold text-xs py-1 px-2 rounded-sm">
              Add to Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
