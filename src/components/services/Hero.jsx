import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`pt-40 pb-20 h-auto bg-empWhite max-w-[1920px] mx-auto w-full object-cover bg-cover bg-bottom bg-no-repeat bg-center flex flex-col items-center justify-center px-4 lg:px-20`}
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="   lg:text-5xl text-xl    font-semibold text-center lg:max-w-4xl text-empBlack leading-none    "
      >
        Explore Our Comprehensive
      </h2>
      <span className={cursive.className}>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="   lg:text-6xl text-2xl text-   font-thin italic text-center lg:max-w-4xl text-empBlack leading-none    "
        >
          Range of Solutions!
        </h2>
      </span>
      <p
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mt-3 text-empBlack font-normal sm:mt-5 text-sm lg:max-w-2xl text-center md:mt-5 "
      >
        We offer a wide range of solutions from customer service and IT support
        to software development, legal services, Artificial Intelligence,
        medical support, accounting, and data management.
      </p>
    </div>
  );
};

export default Hero;
