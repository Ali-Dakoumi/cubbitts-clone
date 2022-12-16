import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiHeartFill } from "react-icons/ri";
import { VscHeart } from "react-icons/vsc";

const Product = ({ product, addFavProduct, favourites }) => {
  const {
    id,
    uid,
    data: { image, title, price, hover },
  } = product;

  return (
    <article className="cursor-pointer relative group">
      <div
        className={`hidden grid-cols-1 items-center gap-1  absolute bottom-10 right-2 z-[10]
      ${hover.url ? "group-hover:grid" : ""} 
      `}
      >
        <div className="rounded-2xl w-2 h-2  bg-[#fb6d19] "></div>
        <div className="rounded-2xl w-2 h-2 bg-[#9d532c] "></div>
        <div className="rounded-2xl w-2 h-2 bg-black"></div>
        <div className="rounded-2xl w-2 h-2 bg-[#2e3f57] "></div>
        <div className=" ml-[-8px] text-xs">+10</div>
      </div>
      <div className="article overflow-hidden relative ">
        <div className="absolute top-2 right-2 z-[50] md:hidden group-hover:block ">
          {favourites?.some((item) => item.id === id) ? (
            <RiHeartFill onClick={() => addFavProduct(product, title)} />
          ) : (
            <VscHeart onClick={() => addFavProduct(product, title)} />
          )}
        </div>
        <Link href={"/products/" + uid}>
          <a className="bg-red-300">
            <Image
              className={`absolute z-10 ${
                hover?.url
                  ? "group-hover:opacity-0 group-hover:z-0"
                  : "group-hover:z-0"
              }  `}
              src={image?.url}
              alt=""
              layout="fill"
              objectFit="cover"
            />
            {hover?.url && (
              <Image
                className={`absolute z-0`}
                src={hover.url}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            )}
          </a>
        </Link>
      </div>
      <div className="mt-[6px] grid grid-cols-2">
        <h2 className="text-xs">{title}</h2>
        <h2 className="text-xs justify-self-end sm:justify-self-start lg:justify-self-start md:justify-self-start">
          ${price}
        </h2>
      </div>
    </article>
  );
};

export default Product;
