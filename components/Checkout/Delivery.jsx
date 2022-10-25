import emailjs from "emailjs-com";
import Link from "next/link";
import React, { useState } from "react";
import { VscCircleFilled } from "react-icons/vsc";
const Delivery = ({ current, setCurrent, array, user, setUser }) => {
  const [method, setMethod] = useState("");
  const handleMethod = (e) => {
    setMethod(e.target.dataset.method);
    console.log(method, "method");
  };
  const handleReturn = () => {
    setCurrent(0);
  };
  function handleCurrent() {
    setCurrent(2);
    setUser((prev) => ({ ...prev, method: method }));
    console.log(user, "user");
  }
  return (
    <div className="mt-10 ml-[25px]">
      <div className="flex flex-col  max-w-[500px] w-[75%] mx-auto ">
        <p className="fz3-15 pb-2 text-[#3b3b3b]">
          {/* Delivery address. You can choose to collect in store at the next step.
          Please note that we are unable to ship prescription lenses to Spain.{" "} */}
          Delivery{" "}
        </p>
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
        </section>
        <h2 className="my-10">Delivery method</h2>
        <section className=" border-[#d9d9d9] border-[1px] border-solid px-5 fz-13 px-5">
          <div className="method-grid justify-between py-5 borderb">
            <div
              className={`
            w-2 h-2 rounded-3xl transition-colors duration-200 ${
              method === "delivery" ? "bg-[#242424]" : "bg-[#d4d4d4]"
            }
            `}
            ></div>
            <h2
              className={`cursor-pointer text-left `}
              onClick={handleMethod}
              data-method="delivery"
            >
              DPD UK Courier Delivery{" "}
            </h2>
            <h2>Free</h2>
          </div>
          <div className="method-grid  justify-between py-5">
            <div
              className={`
            w-2 h-2 rounded-3xl transition-colors duration-200 ${
              method === "pickup" ? "bg-[#242424]" : "bg-[#d4d4d4]"
            }
            `}
            ></div>{" "}
            <h2
              className={`cursor-pointer text-left `}
              onClick={handleMethod}
              data-method="pickup"
            >
              Pick up in store, including frame fitting and adjustment{" "}
            </h2>
            <h2>Free</h2>
          </div>
        </section>
        <button
          className="mt-10 text-left w-full my-2 px-4 py-2 rounded-3xl bg-color-brand hover:bg-button-dark text-white cursor-pointer"
          type="submit"
          onClick={handleCurrent}
        >
          Continue to final confirmation
        </button>
        <button onClick={handleReturn}> Return </button>
      </div>
    </div>
  );
};

export default Delivery;
