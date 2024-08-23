import Link from "next/link";
import React from "react";

function Card({link, heading, subheading }) {
  return (
    <Link href={link}>
      <div className="flex flex-col gap-10 align-middle items-center justify-center mt-10">
        <div className="flex flex-col pt-2 border-2 rounded-xl w-[49rem] h-auto pb-4 items-center text-center justify-left pl-4 text-3xl">
          {heading}
          <div className="flex text-sm mt-1">{subheading}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
