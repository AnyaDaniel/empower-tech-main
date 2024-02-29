"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  const pathname = usePathname();

  return (
    <>
      <footer
        id="footer"
        className={`md:px-20  pt-4 bg-blend-lighten  bg-[#f7f7f7]  bg-no-repeat     shadow-xl `}
      >
        <div className="flex flex-col lg:flex-row justify-end lg:items-start py-10">
          <div className="lg:flex lg:w-full  ">
            <div className="px-4 w-full ">
              <div className="  w-full ">
                <h2 className="text-empBlack lg:text-2xl text-xl font-extrabold pt-5 lg:pt-0 pb-5 lg:text-left ">
                  Get our newsletters
                </h2>
                <p className="text-empBlack text-sm font-extralight text-left ">
                  Subscribe to get curated newsletters and insights
                </p>
                <div className="mt-4 flex  items-center border-emptext-empBlack border-b pb-7">
                  <div className="relative w-full lg:w-[500px] ">
                    <input
                      className="border-[1px] border-netYellow p-2 text-empBlack teext-base bg-transparent w-full lg:w-[500px] lg:h-12 lg:rounded-l-[5px] lg:rounded-l-b-[5px]  placeholder:text-empBlack"
                      placeholder="Email Address"
                    />

                    <button className="absolute top-2 right-2 text-empWhite bg-empGreen w-auto  h-auto text-sm  rounded-lg px-2 lg:px-4 py-1 lg:py-2">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full p-4 border border-empBlack flex flex-col lg:flex-row justify-center gap-y-8 lg:gap-y-0 lg:justify-between items-center rounded-lg">
                <Link
                  href=""
                  className="text-base text-center font-semibold text-empBlack"
                >
                  Who are we
                </Link>
                <Link
                  href=""
                  className="text-base text-center font-semibold text-empBlack"
                >
                  What we offer
                </Link>
                <Link
                  href=""
                  className="text-base text-center font-semibold text-empBlack"
                >
                  Contact us
                </Link>
              </div>
              <div className=" flex flex-col lg:flex-row lg:items-end lg:justify-between pt-2 ">
                <div className="mt-5 flex-col">
                  <p className="text-empBlack text-base font-semibold text-left ">
                    © Empower Tech Ltd.
                  </p>
                  <p className="text-empBlack text-sm font-medium text-left pt-4">
                    Office Address: No. 297B Samuel Nlemoha Street. River Park. Lugbe. Abuja
                  </p>
                  <p className="text-empBlack text-sm font-medium text-left pt-2">
                    Company email: info@empower-outsourcing.com
                  </p>
                  <p className="text-empBlack text-sm font-medium text-left pt-2">
                  Contact:+234 814 529 3217 
                  </p>
              
                    <p className="text-gray-400 text-sm font-medium text-left pt-2">
                      Privacy Policy
                    </p>
             
                </div>
                <div className="mt-5 ">
                  <div className="flex flex-row gap-x-5  items-center">
                    <Link href="">
                      <Image
                        className="object-cover w-auto h-auto"
                        src="/hero/fb.png"
                        width={100}
                        height={100}
                        alt="Logo"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        className="object-cover w-auto h-auto"
                        src="/hero/insta.png"
                        width={100}
                        height={50}
                        alt="Logo"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        className="object-cover w-auto h-auto"
                        src="/hero/tweet.png"
                        width={100}
                        height={50}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <h1 className="text-empBlack pt-5 text-sm lg:text-left text-left">
                    All rights reserved © {year}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row  py-4  border-t justify-center items-center lg:justify-between">
            <h1 className="text-black text-sm lg:text-left text-center">
              © {year} All rights reserved
            </h1>
            <span className="flex gap-2">
              <p className="text-black text-sm underline">Terms of Use</p>
              <p className="text-black text-sm underline">Privacy Policy</p>
            </span>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
