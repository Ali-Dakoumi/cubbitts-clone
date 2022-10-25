import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { CartContext } from "../../pages/_app";

const Tablet = ({ logo, toggleWishlist, favourites, toggleCart }) => {
  const cartItems = useContext(CartContext);
  const { items } = cartItems;
  return (
    <div className="hidden md:grid lg:grid xl:hidden 2xl:hidden  ">
      <div className="justify-self-start col-start-1 row-start-1">
        <Link href={"/"}>
          <a href="">
            <Image src={logo} width={92} height={24} />
          </a>
        </Link>
      </div>
      <div className="links justify-self-center col-start-1 row-start-1">
        <Link href={"/collections/spectacles"}>
          <a className="pr-3">Spectcles</a>
        </Link>
        <Link href={"/collections/sunglasses"}>
          <a className="pr-3">Sunglasses</a>
        </Link>
        <Link href={"/collections/accessories"}>
          <a className="pr-3">Accessories</a>
        </Link>
        <Link href={"/eye-exam"}>
          <a className="pr-3">Eye Exams</a>
        </Link>
      </div>
      <div className="flex items-center justify-self-end col-start-1 row-start-1">
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

export default Tablet;
