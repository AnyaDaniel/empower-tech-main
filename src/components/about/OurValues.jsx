import Image from "next/image";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const OurValues = ({ buttonbg }) => {
  const reasons = [
    {
      reason: "Empowerment",
      desc: "Unleashing individual talents for lawful online success and growth.",
      svg: (
        <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-empLightGreeen w-10 h-10 mr-3">
        <Image
          alt="reason"
          src="/hero/val-one.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
        </span>
      ),
    },
    {
      reason: "Integrity",
      desc: "Upholding ethical standards, fostering trust in all interactions.",
      svg: (
        <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-[#2028E5] bg-opacity-10 w-10 h-10 mr-3">
        <Image
          alt="reason"
          src="/hero/val-two.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
        </span>
      ),
    },
    {
      reason: "Community Impact",
      desc: "Contributing to positive change locally and globally.",
      svg: (
        <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-[#E5A220] bg-opacity-10 w-10 h-10 mr-3">
        <Image
          alt="reason"
          src="/hero/val-three.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
        </span>
      ),
    },
    {
      reason: "Collaboration",
      desc: "Building strong global partnerships to address business challenges.",
      svg: (
        <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-[#BD20E5] bg-opacity-10 w-10 h-10 mr-3">
        <Image
          alt="reason"
          src="/hero/val-four.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
        </span>
      ),
    },
    {
        reason: "Resilience",
        desc: "Nurturing resilience for ongoing growth and triumph in the face of challenges.",
        svg: (
            <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-[#9AD000] bg-opacity-10 w-10 h-10 mr-3">
          <Image
            alt="reason"
            src="/hero/val-five.svg"
            className="w-5 h-5"
            width={50}
            height={50}
          />
          </span>
        ),
      },
      {
        reason: "Client-Centric Excellence",
        desc: "Dedication to exceptional service, prioritizing client satisfaction above all.",
        svg: (
            <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-[#E52020] bg-opacity-10 w-10 h-10 mr-3">
          <Image
            alt="reason"
            src="/hero/val-six.svg"
            className="w-5 h-5"
            width={50}
            height={50}
          />
          </span>
        ),
      },
  ];
  return (
    <section className='h-auto lg:py-10 py-5 bg-[url("/hero/bg-choose.png")] max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-4 lg:px-20 '>
      <header className={cursive.className}>
        <h1 className="text-black text-2xl lg:text-3xl text-center font-thin pb-5">
        Our Core Values
        </h1>
      </header>
      <div className=" w-full  flex flex-col lg:flex-row items-start justify-between gap-x-10">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4 w-full ">
          {reasons.map((reason) => (
            <li
              key={reason.reason}
              className="p-5 lg:p-5 bg-empWhite z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-lg"
            >
              <div className="flex flex-col  gap-y-5">
                <div className="flex justify-center">
                
                   {reason.svg}
                 
                </div>
                <div>
                  <h2 className="text-black text-center text-lg font-bold pb-2">
                    {reason.reason}
                  </h2>
                  <p className="text-gray-500 text-center text-base">{reason.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
     
      </div>
    </section>
  );
};

export default OurValues;
