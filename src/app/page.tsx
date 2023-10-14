import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default async function Home() {
  try {
    await fetch(new URL("api/register", "http://localhost:3000/"));
  } catch (error) {
    throw error;
  }

  return (
    <div className="bg-pageBackground overflow-x-hidden">
      {/* ===Header */}
      <div className="bg-white w-screen h-auto lg:h-screen">
        {/* <div className="bg-gradient-to-b from-pageBackground to-themeColor w-screen h-auto lg:h-screen"> */}
        {/* ===Navbar=== */}
        <Navbar />

        {/* ===Header Body=== */}
        <div className="bg-[url('/orangebackgroundimg.jpg')] h-80 lg:h-full bg-cover px-6 xl:px-56">
          <div>
            <h1 className="text-white text-3xl lg:text-5xl font-bold pt-16 lg:pt-32">
              Afrofood and <br></br> Supplements Store
            </h1>
            <p className="text-white text-xs mb-8 lg:mb-16 lg:text-lg lg:mt-2">
              Your health Our Concern
            </p>
            <a className="bg-white px-8 lg:px-16 py-2 rounded-full text-themeColor text-xs lg:text-base lg:font-bold">
              Shop Now!
            </a>
          </div>
        </div>
      </div>
      {/* ===Categories */}
      <div className="px-4 xl:px-56 py-4 lg:py-12 bg-pageBackground">
        <div className="flex justify-between items-center">
          <h1 className="text-xl lg:text-3xl text-gray-800 font-extrabold px-4">
            Shop by Categories
          </h1>
          <div className="flex items-center gap-2">
            <h2 className="text-xs">View more</h2>
            <Image
              src="/arrow.png"
              alt="Arrow"
              className="w-4"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-2 xl:gap-4 w-full mt-4">
          <a href="/categorySearch">
            <div className="flex flex-col items-center gap-1 col-span-1">
              <Image
                src="/item3.jpg"
                alt="Category"
                className="w-full rounded-xl shadow-lg shadow-gray-200"
                width={100}
                height={0}
                priority
              />
              <p className="text-xs font-semibold">Men's Health</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Women's Health</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Immune boosters</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Groceries</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Catering</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Health & beauty</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Drinks</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Fish, Meat & Poultry</p>
          </div>

          <div className="flex flex-col items-center gap-1 col-span-1">
            <Image
              src="/item3.jpg"
              alt="Category"
              className="w-full rounded-xl shadow-lg shadow-gray-200"
              width={100}
              height={0}
              priority
            />
            <p className="text-xs font-semibold">Bone & Joint care</p>
          </div>
        </div>
      </div>

      {/* ===About Moricol=== */}
      <div className="bg-white py-8 lg:py-12 px-8 xl:px-56">
        <h1 className="text-xl lg:text-3xl text-gray-800 font-extrabold px-4 pb-0 xl:pb-4">
          Our Products
        </h1>

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="flex justify-between items-center gap-2 my-4 xl:my-0 p-4 rounded-sm bg-purple-50 border border-purple-500">
            <div className="w-2/5">
              <Image
                src="/manyfruits.webp"
                alt="Arrow"
                className="w-96"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="text-xs lg:text-sm w-full p-2">
              Our products have higher levels of antioxidants found in certain
              organic foods, which can help strengthen our immune systems and
              contribute to better overall health.{" "}
            </p>
          </div>

          <div className="flex justify-between items-center gap-2 my-4 xl:my-0 p-4 rounded-sm bg-red-50 border border-red-500">
            <div className="w-2/5">
              <Image
                src="/strawberry.webp"
                alt="Arrow"
                className="w-96"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="text-xs lg:text-sm w-full">
              Our products are free from toxic chemicals harmful to our body
              systems. Improved heart condition and rich in antioxidant. Our
              products have better taste. Stronger immune system.
            </p>
          </div>

          <div className="flex justify-between items-center gap-2 my-4 xl:my-0 p-4 rounded-sm bg-yellow-50 border border-yellow-500">
            <div className="w-2/5">
              <Image
                src="/lemon.webp"
                alt="Arrow"
                className="w-96"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="text-xs lg:text-sm w-full">
              Organic products are poison-free. Consumption of highly nutritious
              food products and not genetically modified. Reduced levels of
              toxic metals and quality in meat and milk.
            </p>
          </div>

          <div className="flex justify-between items-center my-4 xl:my-0 gap-2 p-4 rounded-sm bg-green-50 border border-green-500">
            <div className="w-2/5">
              <Image
                src="/guava.webp"
                alt="Arrow"
                className="w-96"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="text-xs lg:text-sm w-full">
              Free yourselves from pesticides in ordinary food production You
              want to reduce your weight healthily, use our supplements.
            </p>
          </div>

          <div className="flex justify-between items-center gap-2 p-4 rounded-sm bg-pageBackground border border-themeColor">
            <div className="w-2/5">
              <Image
                src="/tomato.webp"
                alt="Arrow"
                className="w-96"
                width={100}
                height={0}
                priority
              />
            </div>
            <p className="text-xs lg:text-sm w-full">
              Old age comes with several challenges, but with our products, dead
              cells are rejuvenated to keep you stronger and healthier.
            </p>
          </div>
        </div>
      </div>
      {/* ===Trending Products=== */}
      <div className="pb-4">
        <h1 className="text-center text-4xl lg:text-4xl font-bold lg:font-extrabold pt-10 text-gray-800">
          Trending Products
        </h1>
        <p className="text-xs lg:text-base font-light text-center pb-6">
          Quality trending organic products good for your health
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-2 xl:px-56">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-end items-center gap-2 pr-4 pb-24 pt-4 lg:px-56">
          <h2 className="text-xs font-semibold">See all trending products</h2>
          <Image
            src="/arrow.png"
            alt="Arrow"
            className="w-4"
            width={100}
            height={0}
            priority
          />
        </div>
      </div>
      {/* ===Moricol Banner=== */}
      <div>
        <Image
          src="/moricolbanner.jpeg"
          alt="Moricol Banner"
          className="w-full h-[500px]"
          width={3000}
          height={0}
          priority
        />
      </div>
      {/* ===Frequently asked Questions=== */}
      <div className="pt-4 lg:pt-12 lg:pb-16 pb-8 px-4 xl:px-56">
        <h1 className="text-lg lg:text-xl font-bold">
          Frequently Asked Questions (FAQ’S)
        </h1>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
        <div className="py-2 lg:py-4">
          <h2 className="text-md lg:text-lg font-semibold">
            How do i place an order?
          </h2>
          <p className="text-xs lg:text-sm text-gray-700">
            To place an order, you would need to add products to your cart and
            then proceed to check out. After which your product will be sent to
            your specified location.
          </p>
        </div>
      </div>
      {/* ===Footer=== */}
      <Footer />
    </div>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}
