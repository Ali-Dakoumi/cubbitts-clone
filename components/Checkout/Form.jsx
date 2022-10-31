import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import * as Yup from "yup";

const Form = ({ setCurrent, user, setUser, countries }) => {
  const formik = useFormik({
    initialValues: {
      country: "",
      first: "",
      last: "",
      email: "",
      appartment: "",
      city: "",
      postcode: "",
      phone: "",
    },

    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      first: Yup.string().required("First name must not be empty "),
      last: Yup.string().required("Last name must not be empty "),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      appartment: Yup.string().required(
        "Please enter your street or appartment address"
      ),
      city: Yup.string().required("Your city name is required"),
      postcode: Yup.string().required("Enter your postcode please"),
      phone: Yup.number("Phone must be a number")
        .min(8, "Enter valid phone number")
        .required("Enter valid phone number"),
    }),

    onSubmit: (values) => {
      setUser(values);
      setCurrent(1);
      console.log(values);
    },
  });

  return (
    <div className="mt-10 md:ml-[25px] xl:ml-[25px] 2xl:ml-[25px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col  max-w-[500px] w-[90%] mx-auto "
      >
        <select
          className="w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-black cursor-pointer"
          name="country"
          id="country"
          onChange={formik.handleChange}
          value={formik.values.country}
          onBlur={formik.handleBlur}
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
        {formik.touched.country && formik.errors.country && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.country} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="First name"
          type="text"
          id="first"
          name="first"
          onChange={formik.handleChange}
          value={formik.values.first}
          onBlur={formik.handleBlur}
        />
        {formik.touched.first && formik.errors.first && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.first} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="Last name"
          type="text"
          id="last"
          place-holder
          name="last"
          onChange={formik.handleChange}
          value={formik.values.last}
          onBlur={formik.handleBlur}
        />
        {formik.touched.last && formik.errors.last && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.last} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none   focus:border-black hover:border-black"
          placeholder="email"
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.email} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none  focus:border-black hover:border-black"
          placeholder="Appartment, suite, etc (optional)"
          type="text"
          id="appartment"
          name="appartment"
          onChange={formik.handleChange}
          value={formik.values.appartment}
          onBlur={formik.handleBlur}
        />
        {formik.touched.appartment && formik.errors.appartment && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.appartment} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="City"
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.city} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Postcode"
          type="text"
          id="postcode"
          name="postcode"
          onChange={formik.handleChange}
          value={formik.values.postcode}
          onBlur={formik.handleBlur}
        />
        {formik.touched.postcode && formik.errors.postcode && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.postcode} </p>
          </div>
        )}
        <input
          className="placeholder:text-[#737373] w-full my-2 px-4 py-2 rounded-3xl bg-white border-[1px] border-solid border-[#d9d9d9]  focus:outline-none focus:border-black hover:border-black"
          placeholder="Phone"
          type="text"
          id="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="flex  items-center">
            <AiOutlineWarning color="red" />
            <p className="mx-2 text-xs"> {formik.errors.phone} </p>
          </div>
        )}
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
