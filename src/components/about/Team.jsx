import Image from "next/image";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const Team = () => {
  const reasons = [
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "CEO",
      desc: "Mr. Uzoigwe Tobias ",
      svg: (
        <Image
          alt="reason"
          src="/hero/profile.png"
          className="w-16 h-16 object-cover"
          width={50}
          height={50}
        />
      ),
    },
  ];
  return (
    <section className='h-auto lg:py-10 py-5 bg-[url("/hero/bg-choose.png")] max-w-[1920px] mx-auto w-full object-cover  bg-no-repeat bg-center flex flex-col '>
      <header className={cursive.className}>
        <h1 className="text-black text-2xl lg:text-3xl text-center font-semibold pb-5">
          Meet The Team
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
                <div className="flex justify-center">{reason.svg}</div>
                <div>
                  <h2 className="text-black text-center text-lg font-bold pb-2">
                    {reason.reason}
                  </h2>
                  <p className="text-gray-500 text-center text-base">
                    {reason.desc}
                  </p>
                  <Link
                    href="#"
                    className="text-gray-500 text-center text-base"
                  >
                    <p className="text-center text-xs pt-2 font-semibold">
                      LinkedIn
                    </p>{" "}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
