import Image from "next/image";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const ChooseUs = () => {
  const reasons = [
    {
      reason: "Tailored Communication Solutions",
      desc: "Craft bespoke communication strategies designed to meet the distinct needs and objectives of each client, fostering meaningful connections.",
      svg: (
        <Image
          alt="reason"
          src="/hero/choose-one.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "Multi-Channel Support",
      desc: "Navigate and manage communication seamlessly across diverse channels, including phone calls, emails, live chat, and social media, ensuring a cohesive and comprehensive approach.",
      svg: (
        <Image
          alt="reason"
          src="/hero/choose-two.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "Technology and Innovation",
      desc: "Embrace cutting-edge technology and drive innovation in knowledge process outsourcing, staying at the forefront of industry advancements to deliver smart and efficient solutions.",
      svg: (
        <Image
          alt="reason"
          src="/hero/choose-three.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
    {
      reason: "Compliance, Security, and Customer Engagement",
      desc: "Prioritize data security, ensure regulatory compliance, and enhance customer engagement through scalable solutions, creating a foundation for sustainable business growth",
      svg: (
        <Image
          alt="reason"
          src="/hero/choose-four.svg"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      ),
    },
  ];
  return (
    <section className='h-auto lg:py-10 py-5 bg-[url("/hero/bg-choose.png")] max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col items-start justify-end px-4 lg:px-20 '>
      <header className={cursive.className}>
        <h1 className="text-black text-2xl lg:text-3xl text-center font-thin pb-5">
          Why Choose Empower Tech?
        </h1>
      </header>
      <div className=" w-full  flex flex-col lg:flex-row items-start justify-between gap-x-10">
        <ul className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4 w-full lg:w-2/3 ">
          {reasons.map((reason) => (
            <li
              key={reason.reason}
              className="p-5 lg:p-5 bg-empWhite z-[1000] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-lg"
            >
              <div className="flex flex-col items-start gap-y-5">
                <div>
                  <span className="text-xs font-semibold  flex items-center justify-center uppercase rounded-full p-2 text-pink-600 bg-empLightGreeen w-10 h-10 mr-3">
                   {reason.svg}
                  </span>
                </div>
                <div>
                  <h2 className="text-black text-lg font-bold pb-2">
                    {reason.reason}
                  </h2>
                  <p className="text-gray-500 text-base">{reason.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='h-[500px] p-7 w-full lg:w-1/3 relative bg-[url("/hero/choose-bg.png")] object-cover  bg-cover bg-no-repeat bg-center rounded-[30px] hidden lg:flex'>
          <span className="flex flex-col justify-end ">
            <h2
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="   lg:text-xl text-xl text-   font-bold   lg:max-w-4xl text-empBlack leading-none    "
            >
              Let’s collaborate for success!
            </h2>

            <p
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="mt-3 text-empBlack font-medium  text-sm lg:max-w-2xl text-left md:mt-5 "
            >
              Connect with Us to Explore Exciting Partnership Opportunities.
            </p>
            <Link
              className="text-white flex justify-center mt-4  gap-x-2 items-center px-4  bg-empGreen rounded-[30px] w-40 lg:h-[40px] text-sm"
              href={"https://forms.gle/57wpJr29sXHRL2jS6"}
            >
              Partner with us
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
