"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="static w-full bg-black">
      <nav className="text-white p-3">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <a href="/" className="text-xl font-bold">
            <Image
              src="/logo.png"
              width={140}
              height={140}
              priority
              alt="Portfolio logo"
              className="w-48 h-auto"
            />
          </a>

          <button
            onClick={toggleMenu}
            className="text-white inline-block md:hidden"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "hidden" : "block"
            } flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 gap-7`}
          >
            {["/", "/about", "/projects", "/blogs" , "/contact"].map((path) => (
              <li key={path} className="p-2">
                <Link href={path}>
                  {path === "/" ? (
                    <div>
                      {/* <Image
                        width={200}
                        height={200}
                        src="/home.png"
                        className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                        alt="Home"
                      /> */}
                      <h2 className="mt-2 font-extralight text-2xl ease-in-out duration-300 hover:text-3xl">
                        Home
                      </h2>
                      <div
                        className={
                          pathname === path
                            ? "h-[2px] w-full bg-white mt-2"
                            : ""
                        }
                      ></div>
                    </div>
                  ) : path === "/about" ? (
                    <div>
                      {/* <Image
                        width={200}
                        height={200}
                        src="/about.png"
                        className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                        alt="About"
                      /> */}
                      <h2 className="mt-2 font-extralight text-2xl ease-in-out duration-300 hover:text-3xl">
                        About
                      </h2>
                      <div
                        className={
                          pathname === path
                            ? "h-[2px] w-full bg-white mt-2"
                            : ""
                        }
                      ></div>
                    </div>
                  ) : path === "/projects" ? (
                    <div>
                      {/* <Image
                        width={200}
                        height={200}
                        src="/project.png"
                        className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                        alt="Projects"
                      /> */}
                      <h2 className="mt-2 font-extralight text-2xl ease-in-out duration-300 hover:text-3xl">
                        Projects
                      </h2>
                      <div
                        className={
                          pathname === path
                            ? "h-[2px] w-full bg-white mt-2"
                            : ""
                        }
                      ></div>
                    </div>
                  ) : path === "/blogs"? 
                  <div>
                      {/* <Image
                        width={200}
                        height={200}
                        src="/contact.png"
                        className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                        alt="Contact"
                      /> */}
                      <h2 className="mt-2 font-extralight text-2xl ease-in-out duration-300 hover:text-3xl">
                        Blogs
                      </h2>

                      <div
                        className={
                          pathname === path
                            ? "h-[2px] w-full bg-white mt-2"
                            : ""
                        }
                      ></div>
                    </div>
                  : path === "/contact" ? (
                    <div>
                      {/* <Image
                        width={200}
                        height={200}
                        src="/contact.png"
                        className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                        alt="Contact"
                      /> */}
                      <h2 className="mt-2 font-extralight text-2xl ease-in-out duration-300 hover:text-3xl">
                        Contact Me
                      </h2>

                      <div
                        className={
                          pathname === path
                            ? "h-[2px] w-full bg-white mt-2"
                            : ""
                        }
                      ></div>
                    </div>
                  ) : (
                    path.substring(1).charAt(0).toUpperCase() + path.slice(2)
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="flex h-[1px] bg-white mt-[2px]"></div>
    </div>
  );
};
export default Navbar;
