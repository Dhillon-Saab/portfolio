"use client"
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {

  const [onLoad, setOnLoad] = useState(false)

  useEffect(()=>{
    setOnLoad(true)
  },[])

  return (
    <main>
      <div className={`flex rounded h-full overflow-hidden shadow-lg mt-36 mb-72 justify-center align-middle items-center transition-all duration-1000 ${onLoad? "opacity-100" : "opacity-0 -translate-x-80"} `}>
        <div className="">
          <Image
            width={300}
            className="mr-6 rounded-full border-2"
            height={300}
            src={"/meself.jpg"}
            alt="meself"
          />
        </div>
        <div className="px-0 py-0">
      
          {/* <p className="flex font-poppins mb-5 text-3xl justify-start">
            at Southern Alberta Institute of Technology, Calgary
          </p> */}
          <h1 className="flex text-7xl mb-5 mt-auto justify-start">
            Hi, I'm
            <span className="text-red-500 font-medium">
              &nbsp;Amrit Singh Dhillon
            </span>
          </h1>
          <p className="flex font-poppins mb-5 text-3xl justify-center">
            Software Developer
          </p>
          {/* <p className="flex text-gray-100 text-3xl text-10 mt-10 justify-start">
            Hello stranger welcome to my website
          </p> */}
        </div>
      </div>
    </main>
  );
}
