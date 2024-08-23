"use client";
import { sendMail } from "@/actions/contactMail";
import React, { useRef, useState } from "react";

function Contact() {
  const ref = useRef(null);
  const [res, setRes] = useState();

  return (
    <div>
      <h2 className="text-center mt-4 text-5xl font-bold">Contact Me</h2>
      <div className="justify-center items-center mt-28">
        <form
          ref={ref}
          action={async (formData) => {
            const response = await sendMail(formData);
            setRes(response);
            ref.current?.reset();
          }}
          className="flex flex-col items-center gap-6 border- rounded-2xl"
        >
          {res?.status &&
            setTimeout(() => {
              setRes();
            }, 3000) && (
              <div className="text-center bg-green-600 text-black rounded-lg p-2 transition-all duration-200 opacity-100 after:opacity-0 before:duration-100 before:transition-all before:opacity-0 ">
                {res?.message}
              </div>
            )}
          <div>
            <label className="sr-only" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-lg border-2 bg-transparent border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          {/* <div className="flex">
            <label htmlFor="name" className="font-bold">Name:</label>
            <input
              type="text"
              name="name"
              className="bg-transparent border-white border-2 rounded-lg"
              required
            />
          </div> */}
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-2 bg-transparent border-gray-200 p-3 text-sm"
              placeholder="Email address"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          {/* <div className="flex">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="bg-transparent border-white border-2 rounded-lg justify-center"
              required
            />
          </div> */}
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>

            <textarea
              className="w-full rounded-lg border-2 bg-transparent border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="4"
              cols={22}
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          {/* <div className="flex">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              className="bg-transparent border-white border-2 rounded-lg justify-center"
              required
            />
          </div> */}
          <div className="">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-white px-5 py-3 font-medium text-black sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
          {/* <button
            type="submit"
            className="flex p-3 bg-white text-black w-20 rounded-3xl text-center justify-center items-center align-middle"
          >
            Send
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Contact;
