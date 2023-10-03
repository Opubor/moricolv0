import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      {/* ===Notifications=== */}
      <div className="xl:mx-40">
        <h1 className="font-bold text-lg xl:text-2xl text-gray-800 xl:pt-2 px-4">
          Notifications
        </h1>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
        <div className="bg-pageBackground border border-lightThemeColor xl:rounded-md py-4 px-6 flex justify-start items-center gap-2 mt-1">
          <Image
            src="/bigbell.png"
            alt="bell"
            className="w-4"
            width={100}
            height={0}
            priority
          />
          <p className="text-xs">Dear John your Order (21w091) has arrived</p>
        </div>
      </div>
    </div>
  );
}
