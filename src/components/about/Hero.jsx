import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div
      className={`pt-40 h-auto bg-empWhite max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col items-start justify-center px-4 lg:px-20`}
    >
      <h2
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="   lg:text-5xl text-xl    font-semibold text-left lg:max-w-4xl text-empBlack leading-none    "
      >
        Empowering Futures,
      </h2>
      <span className={cursive.className}>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="   lg:text-6xl text-2xl text-   font-thin italic text-center lg:max-w-4xl text-empBlack leading-none    "
        >
          Connecting Dreams
        </h2>
      </span>
      <p
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mt-3 text-empBlack font-normal sm:mt-5 text-sm lg:max-w-2xl text-left md:mt-5 "
      >
        At Empower Tech Limited, we believe in the power of effective
        communication to transform businesses. With a focus on creating genuine
        connections, we specialize in providing tailored solutions that meet the
        unique needs of our clients. Our team is committed to staying at the
        forefront of technology, ensuring we deliver smart and efficient
        strategies for outsourcing. Our tailored services are designed to
        perfectly align with your business needs, emphasizing service quality,
        cost-effectiveness, and scalability. From customer service and IT
        support to software development, legal services, Artificial
        Intelligence, medical support, accounting, and data management, we
        navigate the spectrum of business functions.
      </p>

      <div
        className=" mt-10 w-full"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <video className="object-cover w-full h-auto" width={1000} height={700} controls>
          <source src="/empower.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="py-20 max-w-xl mx-auto">
        <span className={cursive.className}>
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="   lg:text-6xl text-2xl text-   font-thin italic text-center lg:max-w-4xl text-empBlack leading-none    "
          >
            Our Mission
          </h2>
        </span>
        <p
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="mt-3 text-empBlack font-normal sm:mt-5 text-sm lg:max-w-2xl text-center md:mt-5 "
        >
          Our mission at Empower Tech Limited is to actively combat cybercrime
          in Nigeria while empowering Nigerians to leverage their talents for
          legitimate online opportunities. We are dedicated to fostering
          awareness that individuals can contribute meaningfully to the nation
          and the global community by pursuing lawful avenues for financial
          success. Through our endeavors, we strive to create a secure digital
          landscape, where every Nigerian is equipped with the knowledge and
          resources to make a positive impact while flourishing in the online
          space
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <img src="/img0.jpg" alt="Gallery Image 1" className="object-cover w-full h-auto" />
        <img src="/img1.jpg" alt="Gallery Image 2" className="object-cover w-full h-auto" />
        <img src="/img2.jpg" alt="Gallery Image 3" className="object-cover w-full h-auto" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Hero;
