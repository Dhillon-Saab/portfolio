import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0">
      <div className="flex h-0.5 bg-white mt-3"></div>
      <p className=" bg-black w-screen m-auto align-center text-center text-bold justify-center pt-4">
        Copyright © Amrit Singh Dhillon.
      </p>
      <div className="flex flex-row gap-2 m-auto align-center text-center text-bold justify-center pb-4">
        Get in Contact
        <a href="https://github.com/Dhillon-Saab" target="_blank">
          <span>
            <Image
              width={100}
              height={100}
              className="flex w-4 h-4 mt-1"
              src={"/github.png"}
              alt="github"
            />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/amrit-singh-dhillon/" target="_blank">
          <span>
            <Image
              width={100}
              height={100}
              className="flex w-4 h-4 mt-1"
              src={"/linkedin.png"}
              alt="linkedin"
            />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
