import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  const reasons = [
    {
      reason: "Email the team",
      desc: "Reach out directly to the team at empower@gmail.com ",
      svg: (
        <Image
          alt="reason"
          src="/hero/contact-mail.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "Visit us",
      desc: "Visit our office Hq. No. 297B Samuel Nlemoha Street. River Park. Lugbe. Abuja",
      svg: (
        <Image
          alt="reason"
          src="/hero/contact-map.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "Phone",
      desc: "Mon-Fri 8am-5pm, +234 814 529 3217 ",
      svg: (
        <Image
          alt="reason"
          src="/hero/contact-phone.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
  ];
  return (
    <div
      className={`pt-40 pb-20 h-auto bg-[#F7F7F7] max-w-[1920px] mx-auto w-full  flex flex-col px-4 lg:px-20`}
    >
      <span className={cursive.className}>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="   lg:text-6xl text-2xl text-   font-thin italic lg:text-left lg:max-w-4xl text-empBlack leading-none    "
        >
          Get in Touch
        </h2>
      </span>
      <p
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mt-3 text-empBlack font-normal sm:mt-5 text-sm lg:max-w-2xl text-center lg:text-left md:mt-5 "
      >
        We’d love to hear from you. Our team will reach out ASAP!
      </p>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4 w-full py-5 lg:py-10">
          {reasons.map((reason) => (
            <li
              key={reason.reason}
              className="p-5 lg:p-5 bg-empWhite z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-lg"
            >
                <div className="flex items-start">
                <div>
                  <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2  w-10 h-10 mr-3">
                   {reason.svg}
                  </span>
                </div>
                <div className="flex flex-col items-start gap-y-5">
               
                <div>
                  <h2 className="text-black text-lg font-bold pb-2">
                    {reason.reason}
                  </h2>
                  <p className="text-gray-500 text-base">{reason.desc}</p>
                </div>
              </div>
                </div>
          
            </li>
          ))}
        </ul>
      
    </div>
  );
};

export default Hero;
