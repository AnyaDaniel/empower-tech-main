"use client";
import React, { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import styles from "../../utils/styles/Navigation.module.css";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
  { href: "/sign-out", label: "Sign out" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "about", label: "Who we are" },
    { href: "services", label: "What we offer" },
  ];
  const pathname = usePathname();
  useEffect(() => {
    setNav(true); // Set nav to true initially to make the navbar white
  }, []);

  const handleHamburger = (e) => {
    e.preventDefault();
    setIsActive(false);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     //access to window
  //     const changeBackground = () => {
  //       if (window.scrollY >= 95) {
  //         setNav(true);
  //       } else {
  //         setNav(false);
  //       }
  //     };

  //     window.addEventListener("scroll", changeBackground);
  //   }
  // }, []);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  return (
    <nav
      className={
        nav
          ? `${styles.nav}  ${styles.fixedTop} top-0  z-[1000]    bg-empWhite `
          : `${styles.nav} ${styles.fixedTop} top-0  z-[1000]    backdrop-blur-sm bg-black bg-opacity-20`
      }
    >
      <div className="max-w-[1521px] w-full px-4 mx-auto lg:px-20 ">
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-x-8 w-full">
              <span>
                <Link href={"/"}>
                  <Image
                    className="object-cover"
                    src="/nav/logo.png"
                    width={100}
                    height={50}
                    alt="Logo"
                  />
                </Link>
              </span>
              <span className="hidden lg:block">
                <ul
                  className={`${
                    nav ? "text-empBlack" : "text-empWhite"
                  }  gap-x-6 flex items-center" `}
                >
                  {links.map((link) => (
                    <li
                      key={link.label}
                      className="lg:text-base lg:mr-6 font-semibold cursor-pointer"
                    >
                      <Link href={`/${link.href}`}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </span>
            </div>

            <div className=" justify-end gap-x-8 w-full hidden lg:flex">
              {/* Get started button */}
              <Link
                className={` ${
                  nav ? "border-empGreen text-empGreen" : "border-empWhite text-empWhite "
                } flex justify-center items-center px-4  bg-transparent rounded-[30px] w-auto lg:h-[40px] text-base border `}
                href={"https://forms.gle/57wpJr29sXHRL2jS6"}
              >
                Log in
              </Link>
              <Link
                className="text-white flex  gap-x-2 items-center px-4  bg-empGreen rounded-[30px] w-auto lg:h-[40px] text-base border-t-2 border-empWhite"
                href="/contact"
              >
                <Image
                  className="object-cover w-5 h-5"
                  src="/nav/phone.svg"
                  width={100}
                  height={50}
                  alt="Logo"
                />
                Contact Us
              </Link>
            </div>
            <div className=" justify-end gap-x-8 w-full flex lg:hidden">
              {/* Get started button */}
              <Image
                className="object-cover w-8 h-8"
                src="/nav/menu.svg"
                width={100}
                height={50}
                alt="Logo"
                onClick={() => setIsActive(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}

      <aside
        id="sidebar"
        className={`bg-empWhite  text-black md:w-3/12 w-3/4 space-y-6 h-auto py-6  flex-col absolute top-0 right-0 rounded-l-[30px]   flex lg:flex-col lg:justify-between overflow-y-auto   px-2  z-40  ${
          isActive ? " translate-x-0 in" : "translate-x-full  hidden out"
        }`}
      >
        <div
          className="flex flex-col space-y-4"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <div className="flex justify-end items-center lg:pb-10">
            {/* <Link href={"/"}>
              <Image
                // src={logo}
                className="w-24 h-auto object-cover"
                src={"/logo.png"}
                width={150}
                height={50}
                alt="Tidier Logo"
              />
            </Link> */}
            <span
              onClick={handleHamburger}
              className="bg-black flex justify-end items-center p-1"
            >
              {/* <AiOutlineClose className="text-white text-xl cursor-pointer" /> */}
            </span>
          </div>

          <nav className="space-y-4 lg:space-y-2 px-4">
            {links.map((link) => (
              <span
                onClick={() => setIsActive(false)}
                className="flex items-center space-x-2   transition duration-200 w-full py-2 active:bg-[#ffaa00] hover:bg-[#ffaa00] hover:text-white group cursor-pointer   "
              >
                <span className="block text-sm w-full px-2   duration-300">
                  <Link href={`/${link.href}`} className="text-xl text-black font-medium group-hover:text-white ">
                    {link.label}
                  </Link>
                </span>
              </span>
            ))}
            <div className="w-full h-[1px] bg-gray-500 " />
            <Link
              className={` ${
                nav ? "border-empBlack" : "border-empWhite"
              } text-empGreen flex justify-center items-center px-4 py-2  bg-transparent rounded-[30px] w-auto lg:h-[40px] text-base border `}
              href={"https://forms.gle/57wpJr29sXHRL2jS6"}
            >
              Log in
            </Link>
            <Link
              className="text-white flex justify-center  gap-x-2 items-center px-4 py-2 bg-empGreen rounded-[30px] w-auto lg:h-[40px] text-base border-t-2 border-empWhite"
              href="/contact"
            >
              <Image
                className="object-cover w-5 h-5"
                src="/nav/phone.svg"
                width={100}
                height={50}
                alt="Logo"
              />
              Contact Us
            </Link>
          </nav>
        </div>
      </aside>
    </nav>
  );
};

export default Header;
