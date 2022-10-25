import { useState, useEffect, useContext } from "react";
import { CartContext, FavContext } from "../pages/_app";
import logo from "../assets/logo.svg";
import Mobile from "./Navigation/Mobile";
import Desktop from "./Navigation/Desktop";
import Tablet from "./Navigation/Tablet";
import Wishlist from "./Navigation/Wishlist";
import Cart from "./Navigation/Cart";

const Navigation = () => {
  const fav = useContext(FavContext);
  const { addFavProduct, favourites, setFavourites, removeProduct } = fav;
  const { close, setClose } = fav;
  const cartItems = useContext(CartContext);
  const { items, setItems, cartClose, setCartClose } = cartItems;
  console.log(setCartClose);
  const toggleWishlist = () => {
    document.body.classList.toggle("overflow-hidden");
    setClose(!close);
  };

  const toggleCart = () => {
    setCartClose(!cartClose);
  };

  const getProducts = () => {
    const productFavourites = JSON.parse(localStorage.getItem("ls-products"));
    productFavourites && setFavourites(productFavourites);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" h-14 flex justify-center bg-primary-color z-[100]">
      <div className="fixed bg-primary-color t-0 z-[100] h-14  w-full px-[25px] mx-auto grid items-center pb-4 pt-4">
        <nav className=" my-auto bg-primary-color pb-2  borderb">
          <Mobile
            favourites={favourites}
            toggleWishlist={toggleWishlist}
            close={close}
            logo={logo}
            toggleCart={toggleCart}
          />
          <Desktop
            toggleCart={toggleCart}
            toggleWishlist={toggleWishlist}
            logo={logo}
          />
          <Tablet
            favourites={favourites}
            logo={logo}
            toggleWishlist={toggleWishlist}
            toggleCart={toggleCart}
          />
        </nav>
      </div>
      <Wishlist favourites={favourites} toggleWishlist={toggleWishlist} />
      <Cart toggleCart={toggleCart} />
    </div>
  );
};

export default Navigation;
