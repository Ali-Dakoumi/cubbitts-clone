import React, { useContext, useEffect, useState } from "react";
import { createClient } from "../../prismicio";
import prismic from "../../prismicio";
import { FavContext } from "../_app";
import Product from "../../components/Product";
import Try from "../../components/Try";
import Filter from "../../components/Filter";
import Skeleton from "../../components/Skeleton";
import FilterSkeleton from "../../components/FilterSkeleton";

const accessories = ({ products }) => {
  const fav = useContext(FavContext);
  const { addFavProduct, favourites, setFavourites } = fav;
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(products);
    }, 2000);
  }, []);

  return (
    <>
      <div className="mx-[25px] mt-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 pb-20">
          <div className="flex justify-center mb-6 lg:mb-0 xl:mb-0 2xl:mb-0 ">
            <h2 className="fz-23">accessories</h2>
          </div>
          <div className="lg:w-[75%] xl:w-[75%] 2xl:w-[75%]">
            <p className="fz-15">
              Superior accessories for your glasses and sunglasses, from our
              low-waste Redux Case, artist-designed cleaning cloths, and clip-on
              sunglasses for your spectacles.
              <br /> <br />
              <span className="underline"> Glasses cases</span>{" "}
              <span className="underline">Clip-on sunglasses</span>{" "}
              <span className="underline">Cleaning cloths</span>
            </p>
          </div>
        </div>
        {loading === null && <FilterSkeleton />}
        {loading !== null && <Filter />}{" "}
        {
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-3 gap-y-7">
              {loading === null &&
                products.map((product, i) => (
                  <div className="aspect-square h-full w-full">
                    <Skeleton />
                  </div>
                ))}
              {loading !== null &&
                products.map((product, i) => (
                  <>
                    <Product
                      key={product.id}
                      product={product}
                      addFavProduct={addFavProduct}
                      favourites={favourites}
                    />
                  </>
                ))}
            </div>
          </div>
        }
      </div>
      <Try />
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const products = await client.getAllByType("product", {
    predicates: [
      prismic.predicate.at("my.product.category", "YsRtaBAAACYABPKs"),
    ],
  });
  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}

export default accessories;
