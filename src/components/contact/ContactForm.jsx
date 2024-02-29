import React from "react";
import { Cedarville_Cursive } from "next/font/google";


const cursive = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });


const ContactForm = () => {
  return (
    <section className="text-gray-600 body-font relative px-4 lg:px-20 max-w-[1920px] mx-auto w-full ">
      <div className="container px-5 py-12 lg:py-24 mx-auto">
        <div className="flex flex-col text-left mx-auto mb-12 lg:w-2/3">
        <span className={cursive.className}>
          <h1 className="text-3xl lg:text-3xl font-semibold title-font mb-4 text-gray-900">
          Let’s discuss solutions
          </h1>
          </span>
        
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 lg:w-1/2 w-full">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 lg:w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full flex justify-end">
              <button
                className="text-white flex justify-center  gap-x-2 items-center px-4 py-2 bg-empGreen rounded-[30px] w-auto lg:h-[40px] text-base border-t-2 border-empWhite"
                href="/contact"
              >
                Send Message
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
