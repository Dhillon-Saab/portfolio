"use client";
import { sendMail } from "@/actions/contactMail";
import React, { useRef, useState } from "react";

function page() {

  const ref = useRef(null);
  const [res, setRes] = useState();

  return (
    <div className="justify-center items-center m-auto flex mt-36">
      <form
        ref={ref}
        action={async (formData) => {
          const response = await sendMail(formData);
          setRes(response);
          ref.current?.reset();
        }}
        className="flex flex-col gap-6 border-2 px-16 py-10 rounded-2xl"
      >
        {res?.status &&
          setTimeout(() => {
            setRes();
          }, 3000) && (
            <div className="text-center bg-green-600 text-black rounded-lg py-2 transition-all duration-200 opacity-100 after:opacity-0 before:duration-100 before:transition-all before:opacity-0 ">
              {res?.message}
            </div>
          )}
        <h1 className="font-bold text-4xl text-center">Contact Me</h1>
        <div className="flex gap-6">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="bg-transparent border-white border-2 rounded-lg"
            required
          />
        </div>
        <div className="flex gap-7">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="bg-transparent border-white border-2 rounded-lg justify-end"
            required
          />
        </div>
        <div className="flex gap-6">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            className="bg-transparent border-white border-2 rounded-lg justify-end"
            required
          />
        </div>
        <button
          type="submit"
          className="flex p-3 bg-white text-black w-20 rounded-3xl text-center justify-center items-center align-middle ml-28"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default page;
