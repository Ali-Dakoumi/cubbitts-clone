import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Confirmation from "../components/Checkout/Confirmation";
import Delivery from "../components/Checkout/Delivery";
import CheckoutNav from "../components/Navigation/CheckoutNav";
import Form from "../components/Checkout/Form";
import { CartContext } from "./_app";
import { TbChevronRight } from "react-icons/tb";
const checkout = () => {
  const [user, setUser] = useState({
    first: "",
    last: "",
    company: "",
    appartment: "",
    city: "",
    postcode: "",
    phone: "",
    method: "",
  });
  const cartItems = useContext(CartContext);
  const { items, setItems } = cartItems;
  const [sum, setSum] = useState(0);
  const array = ["Information", "Delivery", "Confirmation", "Done!"];
  const [current, setCurrent] = useState(0);
  const getCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("ls-cart"));
    if (cartItems) {
      setItems([...cartItems]);
    }
  };
  useEffect(() => {
    setSum(items.reduce((total, item) => item.total + total, 0));
  }, [items]);
  useEffect(() => {
    getCart();
  }, []);
  return (
    <div className="grid grid-cols-2 bg-white min-h-[100vh] gap-5 ">
      <div className="flex flex-col overflow-hidden">
        <CheckoutNav />
        <ul className=" flex py-3 ml-[25px] ">
          {array.map((item, i) => {
            return (
              <li>
                <button
                  onClick={() => setCurrent(i)}
                  className={`flex items-center fz-13 ${
                    current < i ? "pointer-events-none" : ""
                  }`}
                >
                  <span
                    className={`px-1 ${
                      i === current ? "text-[#333333] " : "text-[#8f8f8f] "
                    }`}
                  >
                    {item}
                  </span>
                  <span
                    className={`px-1 ${
                      i === current ? "text-[#333333] " : "text-[#8f8f8f] "
                    }`}
                  >
                    <TbChevronRight />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        {array[current] === "Information" && (
          <Form
            current={current}
            setCurrent={setCurrent}
            array={array}
            user={user}
            setUser={setUser}
          />
        )}
        {array[current] === "Delivery" && (
          <Delivery
            current={current}
            setCurrent={setCurrent}
            array={array}
            user={user}
            setUser={setUser}
          />
        )}
        {array[current] === "Confirmation" && (
          <Confirmation
            current={current}
            setCurrent={setCurrent}
            array={array}
            user={user}
            setUser={setUser}
          />
        )}
      </div>
      <div className="bg-primary-color px-[25px]  pt-4 ">
        <div className="borderb pt-2 pb-5 ">
          <p className="max-w-[85%] fz-15">
            If you have ordered prescription frames, you will be asked for your
            prescription details after payment
          </p>
        </div>
        {items.map((item) => (
          <article key={item.id} className="flex w-full py-5">
            <div className="aspect-square w-[150px] mr-[15px] relative ">
              <Image
                src={item.image.url}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <div className="grid grid-cols-1 grid-rows-2 justify-between content-between w-full">
              <div className="flex justify-between">
                <div>
                  <h1>{item.name}</h1>
                  <p className="fz-13 mt-2 text-body-light">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </p>
                </div>
                <h1> ${item.total} </h1>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex items-center justifiy-between ">
                  <h2 className="inline fz-13 ">Qauntity ({item.quantity})</h2>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div className="flex my-2 px-4 py-1 rounded-3xl  border-[1px] border-solid border-[#d9d9d9]  focus:outline-none ">
          <div className="min-w-[80%] ">
            <input
              placeholder="Gift card or promotional code"
              className="w-full placeholder:text-[#737373] bg-transparent focus:outline-none"
              id="checkout_reduction_code"
              aria-required="true"
              size="30"
              type="text"
              name="checkout[reduction_code]"
            />
          </div>
          <button
            name="checkout[submit]"
            type="submit"
            id="checkout_submit"
            className="flex-1 border-l-[1px] pr-2 pl-4 border-[#d9d9d9]"
          >
            <span className="text-[#737373]">Apply</span>
          </button>
        </div>
        {items && (
          <div className="flex justify-between pt-2 pb-4 ">
            <h1>SubTotal </h1>
            <h2> ${sum} </h2>
          </div>
        )}
        <div className="flex justify-between pt-2 pb-4 ">
          <h1>Delivery </h1>
          <h2>Calculated at next step </h2>
        </div>
        {items && (
          <div className="flex justify-between pt-2 pb-4 bordert">
            <h1>Total </h1>
            <h2>${sum} </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default checkout;
