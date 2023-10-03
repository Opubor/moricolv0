import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="bg-themeColor p-4 xl:px-56">
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div>
          <h1 className="text-md font-bold">Corporate address</h1>
          <p className="text-xs">
            2 Public lane off Oghene Road, Sapele, Delta State
          </p>
          <h2 className="text-md font-bold mt-4">Branches</h2>
          <h3 className="text-md font-semibold">LAGOS</h3>
          <p className="text-xs">
            House 2, Road 4 Abraham Adesanyan Estate Ajah Lekki
          </p>
          <h3 className="text-md font-semibold">BENIN</h3>
          <p className="text-xs">
            27 Reuben Agho Avenue off 2nd Ugbor Road GRA
          </p>
          <a className="text-blue-900 text-bold text-xs font-bold">
            Get directions
          </a>
          <h1 className="text-lg font-bold mt-6">Join Our Social Community</h1>
          <div className="flex items-center gap-2">
            <Image
              src="/facebook.png"
              alt="Facebook logo"
              className="w-8"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/instagram.png"
              alt="Facebook logo"
              className="w-8"
              width={100}
              height={0}
              priority
            />
            <Image
              src="/twitter.png"
              alt="Facebook logo"
              className="w-8"
              width={100}
              height={0}
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-bold mt-6 lg:mt-0">Call Us</h1>
          <div className="flex justify-between gap-4">
            <div className="text-xs">
              <h2 className="text-base font-semibold">UK</h2>
              <p>+447479545757</p>
              <p>+447417551811</p>
              <p>+447402158593</p>
            </div>
            <div className="text-xs">
              <h2 className="text-base font-semibold">Nigeria</h2>
              <p>+2348093024826</p>
              <p>+2348093097147</p>
              <p>+2349124460694</p>
              <p>+2349118363550</p>
            </div>
          </div>
          <h1 className="text-lg font-bold mt-6">E-Mail</h1>
          <p className="text-xs">infomoricolhealthcare2gmail.com</p>
          <p className="text-xs">moricolhealth@qualityservice.com</p>
          <p className="text-xs">moricolrecruit@gmail.com</p>
          <h1 className="text-lg font-bold mt-6">Websites</h1>
          <p className="text-xs">Moricolhealth.com</p>
          <p className="text-xs">Moricolservices.com</p>
        </div>
      </div>
      <div className="mt-4 pt-2 border-t-2 border-t-black">
        <div className="flex justify-center items-center gap-4 text-xs text-semibold">
          <a>Return Policy</a>
          <a>Privacy Policy</a>
          <a>Pickup Stations</a>
        </div>
        <p className="font-semibold text-xs text-center mt-4 mb-12">
          Copyright 2023 MORICOL. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
