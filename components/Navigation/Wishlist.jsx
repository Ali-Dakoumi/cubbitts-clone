import Image from "next/image";
import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FavContext } from "../../pages/_app";

const Wishlist = ({ favourites, toggleWishlist, wishlist }) => {
  const fav = useContext(FavContext);
  const { close, removeProduct } = fav;
  return (
    <div
      className={`fixed bg-white top-0 right-0 bottom-0 z-[100] pr-[25px] pl-5 max-w-[500px] w-screen 
    ${close ? "translate-x-0" : "translate-x-[100%]"}
    transition-transform duration-200`}
    >
      <div className="flex justify-between pt-6 pb-2 borderb">
        <h2>Your wishist</h2>
        <button onClick={toggleWishlist}>Close</button>
      </div>
      <div className="py-2 flex flex-col overflow-y-auto max-h-[80vh] mt-5 pr-5">
        {favourites.length === 0 && <h1>Your wishlist is empty</h1>}
        {favourites &&
          favourites.map((product) => (
            <article key={product.id} className="flex w-full py-5 borderb ">
              <div className="aspect-square w-[150px] mr-[15px] relative ">
                <Image
                  src={product.data.image.url}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 justify-between content-between w-full">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h1> {product.data.title} </h1>{" "}
                    <h2 className="fz-13 mt-2 text-body-light">Small Amber</h2>
                  </div>
                  <h1> ${product.data.price} </h1>
                </div>
                <div className="justify-self-end">
                  <div className=" ">
                    <button
                      className=""
                      onClick={() => removeProduct(product.id)}
                    >
                      <AiFillCloseCircle color="#d4d4d4" size="25px" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        {!favourites && <p>Wishlist is empty</p>}
      </div>
      <div className="absolute bottom-2 left-0 right-0 pt-[15px] pb-4 w-full pl-8 pr-[25px] ">
        <button className="mr-[25px]  py-2 px-4 w-full fz-15 bg-button-dark min-w-[285px] text-left rounded-3xl text-white flex justify-between items-center">
          <span className="text-white">
            Login to save your wishlist to your account
          </span>
          <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
