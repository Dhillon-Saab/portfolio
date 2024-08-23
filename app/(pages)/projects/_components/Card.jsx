import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ link, heading, subheading, tags }) {
  return (
    <Link href={link}>
      <div className="flex flex-col gap-10 align-middle items-center justify-center mt-10">
        <div className="flex flex-col pt-2 border-2 rounded-xl w-[49rem] h-auto pb-4 text-start items-center justify-center pl-4 text-3xl">
          <Image
            width={200}
            height={200}
            src={"/shift-sync.jpg"}
            alt="shift sync"
            className="rounded-full my-4"
          />
          {heading}
          <div className="flex text-sm mt-1 p-4">
            {subheading?.split(" ").splice(0, 25).join(" ")}...
          </div>
          <div className="flex gap-3 justify-start align-top items-start mr-[28rem]">
            {tags?.map((tag) => {
              return (
                <div className="text-sm bg-gray-800 p-2 rounded-full">{tag}</div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
