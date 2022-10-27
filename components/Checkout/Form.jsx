import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
const Form = ({ setCurrent, user, setUser, countries }) => {
  let i = 0;
  const [warn, setWarn] = useState(null);
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const validateForm = () => {
    i = 0;
    Object.keys(user).forEach(function (key, index) {
      user[key] === "" ? i : i++;
    });
  };

  function handleCurrent(e) {
    validateForm();
    console.log("validateForm run ", i);
    e.preventDefault();
    if (i < 8) {
      setWarn(true);
    } else {
      setWarn(false);
      e.target.reset();
      setCurrent(1);
      console.log("its valid", i);
    }
  }
  return (
    <div className="mt-10 md:ml-[25px] xl:ml-[25px] 2xl:ml-[25px]">
      <form
        onSubmit={handleCurrent}
        className="flex flex-col  max-w-[500px] w-[90%] mx-auto "
      >
        {warn && (
          <div className="flex justify-center items-center">
            <AiOutlineWarning color="red" />
            <p className="m-2">please fill all the fields </p>
          </div>
        )}
        <select
          className="w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-black cursor-pointer"
          name="country"
          id="country"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        >
          <option className="rounded-3xl" value="">
            choose country
          </option>
          {countries.map((country) => (
            <option className="rounded-3xl" value={country}>
              {country}
            </option>
          ))}
        </select>
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="First name"
          type="text"
          id="first"
          name="first"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="Last name"
          type="text"
          id="last"
          place-holder
          name="last"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="email"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none  focus:border-black hover:border-black"
          placeholder="Appartment, suite, etc (optional)"
          type="text"
          id="appartment"
          name="appartment"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="City"
          type="text"
          id="city"
          name="city"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Postcode"
          type="text"
          id="postcode"
          name="postcode"
          onChange={handleChange}
          // onPointerLeave={validateForm}
        />
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Phone"
          type="text"
          id="phone"
          name="phone"
          onChange={handleChange}
          // onPointerLeave={validateForm}
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
