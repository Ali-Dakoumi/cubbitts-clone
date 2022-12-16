import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext, FavContext } from "../../pages/_app";

const Desktop = ({ toggleWishlist, logo, toggleCart }) => {
  const cartItems = useContext(CartContext);
  const { items } = cartItems;
  const fav = useContext(FavContext);
  const { favourites } = fav;
  const bagLength = "Bag (" + items.length + ")";
  const wishlistLength = "Wishlist (" + favourites.length + ")";

  return (
    <div className="hidden xl:grid">
      <div className="justify-self-start col-start-1 row-start-1">
        <Link href={"/"}>
          <a href="">
            <Image src={logo} width={92} height={24} />
          </a>
        </Link>
      </div>
      <div className="links justify-self-center col-start-1 row-start-1">
        <Link href={"/collections/spectacles"}>
          <a className="pr-3 fz-15">Spectcles</a>
        </Link>
        <Link href={"/collections/sunglasses"}>
          <a className="pr-3 fz-15">Sunglasses</a>
        </Link>
        <Link href={"/collections/accessories"}>
          <a className="pr-3 fz-15">Accessories</a>
        </Link>
        <Link href={"/eye-exam"}>
          <a className="pr-3 fz-15">Eye Exams</a>
        </Link>
      </div>
      <div className="links justify-self-end col-start-1 row-start-1">
        <button onClick={toggleWishlist} className="pl-3 fz-15">
          {`${favourites.length === 0 ? "Wishlist" : wishlistLength}`}
        </button>
        <button onClick={toggleCart} className="pl-3 fz-15 ">
          {`${items.length === 0 ? "Bag" : bagLength}`}
        </button>
      </div>
    </div>
  );
};

export default Desktop;
