"use client";
import Image from "next/image";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import Team from "../about/Team";
import { usePathname } from "next/navigation";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const Services = () => {
  const pathname = usePathname();

  console.log(pathname);

  const services = [
    {
      service: "Customer Relationship Management",

      desc: " Optimize customer relationships through meticulous database management, regular updating of customer information, and seamless integration and maintenance of CRM systems.",
      img: "/hero/services-one.png",
    },
    {
      service: "Multi-Channel Support",

      desc: " Enhance customer engagement across various channels by providing responsive email support, real-time assistance through live chat, positive interactions on social media, and personalized messaging services.",
      img: "/hero/services-two.png",
    },
    {
      service: "Communication Engagement Services",

      desc: " Exceptional inbound services for support, technical assistance, and order processing, coupled with outbound services for telemarketing, sales calls, market research, and appointment setting to drive business growth.",
      img: "/hero/services-three.png",
    },
  ];
  return (
    <section className="h-auto my-20 lg:py-10 py-5 max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col px-4 lg:px-20 ">
      <header className={cursive.className}>
        <h1 className="text-black text-2xl lg:text-3xl text-center font-thin pb-5">
          Our Key Services
        </h1>
      </header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-y-4 w-full pb-5">
        {services.map((item) => (
          <div
            key={item.service}
            className="w-full lg:min-w-[376px] rounded-t-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
          >
            <div className="bg-empWhite ">
              <Image
                src={item.img}
                alt=""
                width={500}
                height={500}
                className="rounded-t-lg w-full h-auto object-cover"
              />
              <div>
                <span className="flex flex-col p-5 ">
                  <h2 className="font-semibold text-xl text-lmsBlack">
                    {item.service}
                  </h2>
                  <p className="text-lmsBlack text-sm pt-3">{item.desc}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {pathname === "/about" && <Team />}
      <div className="bg-empWhite ">
        <div className="flex flex-col justify-center py-5 lg:py-20">
          <header className={cursive.className}>
            <h1 className="text-black text-2xl lg:text-3xl text-center font-thin pb-5">
              Our Affilliates
            </h1>
          </header>

          <div className=" w-full  z-20 gap-4 pb-5 lg:pb-0  flex-wrap flex  flex-col lg:flex-row lg:justify-between items-center">
            <Image
              src="/hero/client-one.png"
              className="w-auto h-auto object-cover  "
              alt="nitda"
              width={500}
              height={500}
            />
            <Image
              src="/hero/client-two.png"
              className="w-auto h-auto object-cover  "
              alt="nitda"
              width={500}
              height={500}
            />
            <Image
              src="/hero/client-three.png"
              className="w-auto h-auto object-cover  "
              alt="nitda"
              width={500}
              height={500}
            />
            <Image
              src="/hero/client-four.png"
              className="w-auto h-auto object-cover  "
              alt="nitda"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div
        className={`h-auto bg-[url("/hero/partner-bg.png")] rounded-lg w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col  px-5 lg:px-10 py-20 lg:py-14`}
      >
        <span className="flex flex-col justify-end ">
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="   lg:text-3xl  text-2xl   font-semibold   max-w-sm text-empWhite leading-none    "
          >
            Ready to Elevate Your Business?
          </h2>

          <p
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="mt-3 text-empWhite font-normal  text-xs lg:max-w-lg text-left md:mt-5 "
          >
            Connect with Us to Explore Exciting Partnership Opportunities.
          </p>

          <Link
            className="text-white flex justify-center mt-4  gap-x-2 items-center px-4  bg-empGreen rounded-[30px] w-40 h-[40px] text-sm border-t-2 border-empWhite"
            href={"https://forms.gle/57wpJr29sXHRL2jS6"}
          >
            Partner with us
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Services;
