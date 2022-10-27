import Image from "next/image";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscHeart, VscMenu } from "react-icons/vsc";
import { CartContext } from "../../pages/_app";

const Mobile = ({ toggleWishlist, logo, favourites, toggleCart }) => {
  const menu = useRef(null);
  const [close, setClose] = useState(false);
  const cartItems = useContext(CartContext);
  const { items } = cartItems;
  const toggleMenu = () => {
    menu.current.classList.toggle("translate-x-[-100%]");
    document.body.classList.toggle("overflow-hidden");
    setClose(!close);
  };
  return (
    <div className="md:hidden lg:hidden xl:hidden 2xl:hidden grid items-center ">
      <div className="justify-self-start col-start-1 row-start-1 z-20">
        <button
          onClick={toggleMenu}
          className={`z-20   ${close ? "" : "hidden"}  `}
        >
          <IoCloseOutline />
        </button>
        <button
          onClick={toggleMenu}
          className={`z-20   ${close ? "hidden" : ""}  `}
        >
          <VscMenu />
        </button>
      </div>
      <div
        ref={menu}
        className="fixed top-0 left-0 right-0 bottom-0 z-10 pt-14 max-w-[96%] w-screen translate-x-[-100%] transition-transform duration-200  "
      >
        <div className="flex flex-col h-screen bg-[#f5f5f3] pl-[25px]">
          <Link href={"/collections/spectacles"}>
            <a
              onClick={toggleMenu}
              className=" py-3 text-color-brand relative "
            >
              <div className="flex justify-between w-full">
                <span>Spectcles</span> <MdKeyboardArrowRight />
              </div>
            </a>
          </Link>
          <Link href={"/collections/sunglasses"}>
            <a
              onClick={toggleMenu}
              className=" py-3 text-color-brand relative "
            >
              <div className="flex justify-between w-full">
                <span>sunglasses</span> <MdKeyboardArrowRight />
              </div>
            </a>
          </Link>
          <Link href={"/collections/accessories"}>
            <a className=" py-3 text-color-brand relative ">
              <div className="flex justify-between w-full">
                <span>Accessories</span> <MdKeyboardArrowRight />
              </div>
            </a>
          </Link>
          <Link href={"/eye-exam"}>
            <a
              onClick={toggleMenu}
              className=" py-3 text-color-brand relative "
            >
              <div className="flex justify-between w-full">
                <span>Eye Exam</span> <MdKeyboardArrowRight />
              </div>
            </a>
          </Link>
          <Link href={"/wishlist"}>
            <a
              onClick={toggleMenu}
              className=" py-3 text-color-brand relative "
            >
              <div className="flex justify-between w-full">
                <span>Wishlist</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="justify-self-center col-start-1 row-start-1">
        <Link href={"/"}>
          <a href="">
            <Image src={logo} width={92} height={24} />
          </a>
        </Link>
      </div>
      <div className="flex justify-self-end col-start-1 row-start-1">
        <div onClick={toggleWishlist} className="relative pl-3 cursor-pointer">
          <VscHeart />
          {favourites.length !== 0 && (
            <div className="absolute top-[-2px] right-[-2px] h-1 w-1 bg-green-400 rounded-2xl"></div>
          )}
        </div>
        <div onClick={toggleCart} className="pl-3 cursor-pointer relative">
          <BsHandbag />
          {items.length !== 0 && (
            <div className="absolute top-[-2px] right-[-2px] h-1 w-1 bg-green-400 rounded-2xl"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
