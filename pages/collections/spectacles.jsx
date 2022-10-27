import React, { useContext, useEffect, useState } from "react";
import { createClient } from "../../prismicio";
import prismic from "../../prismicio";
import { FavContext } from "../_app";
import Try from "../../components/Try";
import Filter from "../../components/Filter";
import Skeleton from "../../components/Skeleton";
import FilterSkeleton from "../../components/FilterSkeleton";
import Product from "../../components/Product";
const spectacles = ({ products }) => {
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
            <h2 className="fz-23">Spectacles</h2>
          </div>
          <div className="lg:w-[75%] xl:w-[75%] 2xl:w-[75%]">
            <p className="fz-15">
              It’s an unusual person who doesn’t play a character some of the
              time. Most of the time. And each pair of spectacles which help you
              get into character is unique. Not unique in some soft and bland
              marketing sense, but in a really real sense.
              <br /> <br />
              Our glasses frames are available with prescription,
              non-prescription, and reading lenses, including free worldwide
              delivery.
              <br /> <br />
              <span className="underline"> Acetate glasses </span>
              <span className="underline">Titanium glasses </span>
              <span className="underline">New in glasses </span>
            </p>
          </div>
        </div>
        {loading === null && <FilterSkeleton />}
        {!loading && <Filter />}
        {
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-3 gap-y-7">
              {loading === null &&
                products.map((product, i) => (
                  <div className="aspect-square h-full w-full">
                    <Skeleton />
                  </div>
                ))}
              {/* <Suspense fallback={``}> */}
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
              {/* </Suspense> */}
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
      prismic.predicate.at("my.product.category", "YsRtHBAAACcABPFM"),
    ],
  });

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
export default spectacles;
