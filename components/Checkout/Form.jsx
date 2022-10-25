import emailjs from "emailjs-com";
import Link from "next/link";
import React, { useState } from "react";

const Form = ({ current, setCurrent, array, user, setUser }) => {
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  function handleCurrent(e) {
    e.preventDefault();
    e.target.reset();
    setCurrent(1);
    console.log(current);
  }
  return (
    <div className="mt-10 ml-[25px]">
      <form
        onSubmit={handleCurrent}
        className="flex flex-col  max-w-[500px] w-[75%] mx-auto "
      >
        <p className="fz3-15 pb-2 text-[#3b3b3b]">
          {/* Delivery address. You can choose to collect in store at the next step.
          Please note that we are unable to ship prescription lenses to Spain.{" "} */}
          Information
        </p>
        <select
          className="w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-black cursor-pointer"
          name="country"
          id="country"
        >
          <option className="rounded-3xl" value="United Kingdom">
            United Kingdom
          </option>
        </select>
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="First name"
          type="text"
          id="first"
          name="first"
          onChange={handleChange}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="Last name"
          type="text"
          id="last"
          place-holder
          name="last"
          onChange={handleChange}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="Company (optional)"
          type="text"
          id="company"
          name="company"
          onChange={handleChange}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none  focus:border-black hover:border-black"
          placeholder="Appartment, suite, etc (optional)"
          type="text"
          id="appartment"
          name="appartment"
          onChange={handleChange}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="City"
          type="text"
          id="city"
          name="city"
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Postcode"
          type="text"
          id="postcode"
          name="postcode"
          onChange={handleChange}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Phone"
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
        />

        <button
          className="text-left w-full my-2 px-4 py-2 rounded-3xl bg-color-brand hover:bg-button-dark text-white cursor-pointer"
          type="submit"
        >
          Continue to delivery
        </button>
        <Link href={"/"}>
          <a> Return </a>
        </Link>
      </form>
    </div>
  );
};

export default Form;
