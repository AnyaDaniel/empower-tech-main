import Image from "next/image";
import React from "react";
import { Cedarville_Cursive } from "next/font/google";
import Link from "next/link";

const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

const AllServices = ({ buttonbg }) => {
  const reasons = [
    {
      reason: "Inbound Calls",
      desc: "CDelivering customer support, technical assistance, order processing, and expert inquiry handling.",
    },
    {
      reason: "Outbound Calls",
      desc: "Conducting telemarketing, sales calls, surveys, market research, and efficient appointment setting.",
    },
    {
      reason: "Communication Engagement Services",
      desc: "Contributing to positive change locally and globally.",
    },
    {
      reason: "Customer Relationship Management (CRM)",
      desc: "Managing databases, updating customer information, and ensuring seamless CRM integration.",
    },
    {
      reason: "Multi-Channel Support",
      desc: "Providing responsive email, live chat, social media support, and personalized messaging services.",
    },
    {
      reason: "Virtual Assistant Services",
      desc: "Offering administrative support, calendar management, data entry, and research.",
    },
    {
      reason: "Technical Support",
      desc: "Addressing IT help desk issues, software troubleshooting, and providing remote assistance.",
    },
    {
      reason: "Order Fulfillment",
      desc: "Managing order processing, inventory, and providing shipping and logistics support.",
    },
    {
      reason: "Quality Assurance and Monitoring",
      desc: "Conducting call monitoring and evaluation, performance analytics, and continuous improvement.",
    },
    {
      reason: "Lead Qualification and Nurturing",
      desc: "Scoring leads, implementing nurturing campaigns, and managing database segmentation.",
    },
    {
      reason: "Back-Office Support",
      desc: "Handling data processing, document management, and providing accounting and finance support.",
    },
    {
      reason: "Language Support",
      desc: "Delivering multilingual customer support and providing translation and interpretation services",
    },
  ];
  const reas = [
    {
      reason: "UI/UX Design",
      desc: "Crafting intuitive and visually appealing user interfaces for optimal user experiences.",
    },
    {
      reason: "Web Development",
      desc: "Building dynamic and responsive websites for seamless online experiences.",
    },
    {
      reason: "Mobile App Development",
      desc: "Creating innovative and user-friendly mobile applications for various platforms.",
    },
  
    {
      reason: "Cloud Hosting & Storage",
      desc: "Providing scalable and secure cloud solutions for efficient data hosting and storage.",
    },
  ];
  return (
    <section className="h-auto lg:py-10 py-5 bg-empWhite max-w-[1920px] mx-auto w-full object-cover bg-cover bg-no-repeat bg-center flex flex-col items-start justify-end px-4 lg:px-20 ">
      <header className={cursive.className}>
        <h1 className="text-black text-2xl lg:text-3xl text-center font-thin pb-5">
          Why Choose Empower Tech?
        </h1>
      </header>
      <div className=" w-full  flex flex-col lg:flex-row items-start justify-between gap-x-10">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4 lg:gap-y-10 w-full ">
          {reasons.map((reason) => (
            <li key={reason.reason} className=" ">
              <div className="flex flex-col items-start gap-y-5">
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
      </div>

      <span className={cursive.className}>
        <h2
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="pt-5 lg:pt-10   lg:text-4xl text-2xl text-   font-thin italic text-left text-empBlack leading-none    "
        >
          Digital Solutions and Development Services
        </h2>
      </span>
      <p
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="mt-3 text-empBlack font-normal sm:mt-5 text-sm  text-left md:mt-5 "
      >
        At Empower Outsourcing, we boast a team of brilliant minds and creative
        thinkers, equipped with exceptional skills to carve a path in the
        dynamic tech world. Your concerns find a home with us, as we stand as
        your comprehensive solution for all IT and Tech needs. Whether you seek
        a designer or a developer, rest assured, we've got you covered.
        <br />
        <br />
        Our designers specialize in crafting the finest UI/UX designs, backed by
        impressive portfolios that speak to our expertise. The development
        journey is seamlessly guided by our outstanding Frontend team,
        incorporating cutting-edge technology, AI, captivating animations, and
        web3 concepts. Our Backend Team ensures robust security and reliability,
        coupled with cloud services and DevOps.
        <br />
        <br />
        And if a mobile app is on your wishlist, consider it done without a
        hitch. At Empower Outsourcing, excellence is not just a promise – it's a
        commitment we deliver on every project.
        <br />
        <br />
        Services we offer:
      </p>

      <ul className="pt-10 lg:pt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-4 lg:gap-y-10 w-full ">
          {reas.map((reason) => (
            <li key={reason.reason} className=" ">
              <div className="flex flex-col items-start gap-y-5">
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
    </section>
  );
};

export default AllServices;
