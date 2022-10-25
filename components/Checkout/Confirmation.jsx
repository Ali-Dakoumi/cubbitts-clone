import emailjs from "emailjs-com";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "../../pages/_app";
import Router from "next/router";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Confirmation = ({ current, setCurrent, array, user }) => {
  const cartItems = useContext(CartContext);
  const { items, setItems } = cartItems;
  let orderData = {
    first: user.first,
    last: user.last,
    appartment: user.appartment,
    city: user.city,
    postcode: user.postcode,
    phone: user.phone,
    method: user.method,
    products: `${items.map((product, i) => {
      const products =
        "[Product Number: " +
        i +
        ", ID: " +
        product.id +
        ", Name: " +
        product.name +
        ", Quantity: " +
        product.quantity +
        " ] ";
      return products;
    })}`,
    total: "total: $" + items.reduce((total, item) => item.total + total, 0),
  };

  console.log(orderData);
  function sendOrder() {
    emailjs
      .send("gmail", "template_2y5honm", orderData, "8EIev0hyFjLKOnq7T")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setCurrent(3);
    setItems([]);
    localStorage.setItem("ls-cart", JSON.stringify([]));
  }
  const handleReturn = () => {
    setCurrent(1);
  };
  if (current === 3) {
    return (
      <div className="mt-10 ml-[25px]">
        <div className="flex flex-col  max-w-[500px] w-[75%] mx-auto ">
          <section className="border-[#d9d9d9] border-[1px] border-solid px-5 fz-13">
            <BsFillCheckCircleFill />
            <p>
              Your order has been sent now, we will call you as soon as
              possible!
            </p>
            <Link href={"/"}>
              <a>Go back to home page. </a>
            </Link>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-10 ml-[25px]">
      <div className="flex flex-col  max-w-[500px] w-[75%] mx-auto ">
        <section className="border-[#d9d9d9] border-[1px] border-solid px-5 fz-13">
          <div className="flex borderb py-3 border-[#d9d9d9] border-b-[1px] border-solid">
            <h2 className="pr-5 text-[#797979] w-[80px] ">Name</h2>
            <h2 className="text-[#333333] ">
              {user.first} {user.last}
            </h2>
          </div>
          <div className="flex border-[#d9d9d9] border-b-[1px] border-solid py-3">
            <h2 className="pr-5 text-[#797979] w-[80px] ">Contact</h2>{" "}
            <h2 className="text-[#333333] ">{user.phone}</h2>
          </div>
          <div className="flex  py-3">
            <h2 className="pr-5 text-[#797979] w-[80px] ">Adsress</h2>
            <h2 className="text-[#333333] ">
              {user.appartment}, {user.city}, {user.postcode}
            </h2>
          </div>
          <div className="flex  py-3">
            <h2 className="pr-5 text-[#797979] w-[80px] ">Method</h2>
            <h2 className="text-[#333333] ">{user.method} </h2>
          </div>
        </section>
        <button
          className="mt-10 text-left w-full my-2 px-4 py-2 rounded-3xl bg-color-brand hover:bg-button-dark text-white cursor-pointer"
          type="submit"
          onClick={sendOrder}
        >
          Confirm Everything
        </button>
        <button onClick={handleReturn}> Return </button>
      </div>
    </div>
  );
};

export default Confirmation;
