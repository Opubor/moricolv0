import Image from "next/image";
import React from "react";

function ProductCard() {
  return (
    <a href="/productDetails">
      <div className="bg-white rounded-2xl shadow-lg shadow-gray-200 pb-4">
        <div className="bg-[url('/item2.jpg')] bg-cover w-full h-56 lg:h-64 rounded-t-2xl">
          <div className="w-full flex justify-end items-center p-4">
            <Image
              src="/heartplus.png"
              alt="plus sign"
              className="w-6"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="p-2 lg:p-4">
          <h1 className="text-sm text-gray-500">125ml Organic Tea</h1>
          <h2 className="text-lg font-extrabold text-themeColor">&#8358;120</h2>
        </div>
        <div className="bg-white hover:bg-themeColor border border-themeColor rounded-sm mx-2 flex justify-center items-center py-1">
          <p className="text-xs">Add to Cart</p>
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
