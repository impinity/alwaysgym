"use client";
import { Link, animateScroll  } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full z-20 py-3 xl:px-20 px-5 top-0 start-0 backdrop-blur-md bg-white/70">
        <div
          className={`flex flex-wrap items-center justify-between mx-auto p-4 ${
            isMobileMenuOpen ? "h-auto" : "h-16"
          }`}
        >
          <Link
            href={"#"}
            className="flex items-center space-x-3 rtl:space-x-reverse transition delay-75 hover:rotate-6 hover:bg-[#438063]"
          >
            <span className="self-center font-semibold text-gray-900 text-lg transition delay-75 hover:text-white">
              AlwaysGym
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-md md:hidden"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill=""
              >
                <title />
                <g data-name="1" id="_1">
                  <path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                  <path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                  <path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z" />
                </g>
              </svg>
            )}
          </button>

          <motion.div
            className={` w-52 rounded-xl bg-[#438063] md:bg-transparent md:w-auto transform transition-transform duration-300 ${
              isMobileMenuOpen
                ? "transition -translate-x-0 absolute top-20 end-2"
                : "transition translate-x-full duration-300 opacity-0 md:opacity-100 md:transform-none"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-white md:text-gray-800 font-normal md:bg-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link
                  to="banner"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 bg-white text-green-800 cursor-pointer underline underline-offset-4 rounded-lg transition-transform delay-75 md:hover:ring-1 md:hover:ring-green-700 md:hover:-translate-x-3"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 ring-1 ring-white cursor-pointer mt-4 md:mt-0 rounded-lg transition-transform delay-75 hover:bg-white hover:text-green-800 md:hover:ring-1 md:hover:ring-green-700 md:hover:-translate-x-3 md:hover:text-green-800"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 ring-1 ring-white cursor-pointer mt-4 md:mt-0 rounded-lg transition-transform delay-75 hover:bg-white hover:text-green-800 md:hover:ring-1 md:hover:ring-green-700 md:hover:-translate-x-3 md:hover:text-green-800"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="member"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 ring-1 ring-white cursor-pointer mt-4 md:mt-0 rounded-lg transition-transform delay-75 hover:bg-white hover:text-green-800 md:hover:ring-1 md:hover:ring-green-700 md:hover:-translate-x-3 md:hover:text-green-800"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  to="ourgym"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 ring-1 ring-white cursor-pointer mt-4 md:mt-0 rounded-lg transition-transform delay-75 hover:bg-white hover:text-green-800 md:hover:ring-1 md:hover:ring-green-700 md:hover:-translate-x-3 md:hover:text-green-800"
                >
                  Our Gym
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
