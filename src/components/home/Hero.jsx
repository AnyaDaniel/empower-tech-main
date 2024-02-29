import Link from "next/link";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });
const Hero = () => {
  return (
    <div
      className={`h-screen bg-[url("/hero/hero-img.png")] max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col items-start justify-end px-4 lg:px-20`}
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="   lg:text-5xl text-xl    font-extrabold text-left lg:max-w-4xl text-empWhite leading-none    "
      >
        Where Inbound Excellence Meets
      </h2>
      <span className={cursive.className}>
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="   lg:text-6xl text-2xl text-   font-thin italic text-center lg:max-w-4xl text-empWhite leading-none    "
      >
        Outbound Ingenuity{" "}
      </h2>
      </span>
        <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="mt-3 text-empWhite font-medium sm:mt-5 text-md lg:max-w-2xl text-left md:mt-5 "
        >
          We are dedicated to creating genuine connections that drive long-term
          success. Our tailored communication solutions, supported by
          cutting-edge technology, redefine outsourcing with smart and effective
          strategies.
        </p>
    
      <div
        className=" mt-10"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className=" flex flex-col  md:justify-start md:items-start  rounded-md justify-center items-center">
          <Link
            className="text-white flex  gap-x-2 items-center px-4  bg-empGreen rounded-[30px] w-auto lg:h-[40px] text-base border-t-2 border-empWhite"
            href={"https://forms.gle/57wpJr29sXHRL2jS6"}
          >
            Get Started
          </Link>
        </div>
        x
      </div>
    </div>
  );
};

export default Hero;
