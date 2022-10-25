import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CartContext } from "../../pages/_app";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ toggleCart }) => {
  const cartItems = useContext(CartContext);
  const { items: addedItems, setItems, cartClose, setCartClose } = cartItems;
  console.log(addedItems[0]);
  const [sum, setSum] = useState(0);
  const saveCartToLS = (items) => {
    localStorage.setItem("ls-cart", JSON.stringify(items));
  };
  const removeProduct = (id) => {
    const temp = addedItems.filter((item) => {
      return item.id !== id;
    });
    setItems([...temp]);
    localStorage.setItem("ls-cart", JSON.stringify(temp));
  };
  const resetCard = () => {
    setItems([]);
    saveCartToLS(addedItems);
  };
  const increment = (item) => {
    let temp = addedItems.map((addedItem) =>
      addedItem.id === item.id
        ? {
            ...item,
            quantity: (item.quantity += 1),
            total: item.price * item.quantity,
          }
        : addedItem
    );
    setItems([...temp]);
    console.log(item.total);
    saveCartToLS(temp);
  };
  const decrement = (item) => {
    if (item.quantity <= 1) return;
    let temp = addedItems.map((addedItem) =>
      addedItem.id === item.id
        ? {
            ...item,
            quantity: (item.quantity -= 1),
            total: item.price * item.quantity,
          }
        : addedItem
    );
    setItems([...temp]);
    console.log(item.total);
    saveCartToLS(temp);
  };
  const getCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("ls-cart"));
    if (cartItems) {
      setItems([...cartItems]);
    }
  };

  useEffect(() => {
    getCart();
  }, [cartClose]);
  useEffect(() => {
    setSum(addedItems.reduce((total, item) => item.total + total, 0));
  }, [addedItems]);

  return (
    <div
      className={`cart-row fixed bg-white top-0 right-0 bottom-0 z-[100] pr-[25px] pl-5 max-w-[500px] w-screen 
      ${cartClose ? "translate-x-0" : "translate-x-[100%]"}
       transition-transform duration-200`}
    >
      <div className="flex justify-between pt-6 pb-2 borderb">
        <h1>Cart </h1>
        <button onClick={toggleCart}>Close</button>
      </div>
      <div className="pt-5 pb-7 borderb">
        <p className="max-w-[75%] ">
          Complimentary delivery on all UK orders, and international orders over
          £125/€175/$200
        </p>
      </div>
      {addedItems.length === 0 && (
        <div className="pt-5 pb-7 borderb">
          <p> Your cart is empty </p>
        </div>
      )}
      {addedItems.length > 0 && (
        <div className="py-2 flex flex-col overflow-y-auto max-h-[65vh] pr-5 ">
          {addedItems.map((item) => (
            <article key={item.id} className="flex w-full py-5 borderb ">
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
                      {" "}
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1)}
                    </p>
                  </div>
                  <h1> ${item.total} </h1>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex items-center justifiy-between ">
                    <button
                      className="mx-2"
                      onClick={() => decrement(item, item.price)}
                    >
                      -
                    </button>
                    <h2 className="inline">{item.quantity}</h2>
                    <button
                      className="mx-2"
                      onClick={() => increment(item, item.price)}
                    >
                      +
                    </button>
                  </div>
                  <div className=" ">
                    <button className="" onClick={() => removeProduct(item.id)}>
                      <AiFillCloseCircle color="#d4d4d4" size="25px" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="absolute bottom-2 left-0 right-0 pt-[15px] pb-4 w-full pl-5 pr-[25px] ">
        {addedItems && (
          <div className="flex justify-between pt-2 pb-4 bordert">
            <h1>SubTotal </h1>
            <h2> ${sum === 0 ? "0" : sum} </h2>
          </div>
        )}
        <Link href={"/checkout"}>
          <a
            onClick={toggleCart}
            className="text-white mr-[25px]  py-2 px-4 w-full fz-15 bg-button-dark min-w-[285px] text-left rounded-3xl text-white flex justify-between items-center"
          >
            Checkout
            <HiArrowNarrowRight />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
