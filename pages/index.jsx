import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { createClient } from "../prismicio";
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiHeartFill } from "react-icons/ri";
import { VscHeart } from "react-icons/vsc";
import { FavContext } from "./_app";
import Product from "../components/Product";

const Home = ({ document, products }) => {
  const { slices } = document.data;
  const items = slices.map((slice) => slice?.items);
  // const product = items[1][0].product;
  // const product2 = items[1][0].product2;
  // const product3 = items[1][0].product3;
  // const product4 = items[1][0].product4;
  // const products = [product, product2, product3, product4];
  const [loading, setLoading] = useState(false);
  const fav = useContext(FavContext);
  const {
    favourites,
    setFavourites,
    close,
    setClose,
    addFavProduct,
    removeProduct,
  } = fav;

  return (
    <div asscroll-container="true">
      <Head>
        <title>Cubitts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-[25px]  ">
        <section className=" w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid py-5 borderb">
          <div className="w-full h-[85vh] md:border-0 xl:border-0 2xl:border-0 col-span-1 relative overflow-hidden ">
            <Image
              src={items[0][0].imagetwo.url}
              className=" scale-img"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 bordert pt-3 md:border-0 xl:border-0 2xl:border-0 md:pt-0 xl:pt-0 2xl:pt-0">
              <div className="h-[60vh] w-full relative overflow-hidden ">
                <Image
                  className=" scale-img"
                  src={items[0][0].imageone.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 text-color-brand">
                <p>{items[0][0].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[0][0].title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-x-3 gap-y-7 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-5 borderb ">
          <div className="col-span-1 row-span-2 ">
            <div className="sticky top-16">
              <h1 className="fz-15 md:fz-30 xl:fz-38 2xl:fz-38  ">
                {items[1][0].title}
              </h1>
              <Link href={items[1][0].buttonlink.url}>
                <a className="mt-[6px] text-[15px]  flex items-center ">
                  <span className="mr-2">
                    <HiArrowNarrowRight />
                  </span>
                  {items[1][0].buttonlabel}
                </a>
              </Link>
            </div>
          </div>
          <div className="md:grid-span2 xl:grid-span2 2xl:grid-span2">
            <div className="grid grid-cols-2 gap-x-3 gap-y-7">
              {products.map((product, i) => (
                <Product
                  key={product.id}
                  product={product}
                  addFavProduct={addFavProduct}
                  favourites={favourites}
                />
              ))}
            </div>
          </div>
        </section>
        <section className=" w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid pt-5 pb-5 lg:pb-24 xl:pb-24 2xl:pb-24 borderb">
          <div>
            <div className="grid grid-cols-1 gap-3 2xl:bordert pt-3 md:border-0 xl:border-0 2xl:border-0 md:pt-0 xl:pt-0 2xl:pt-0">
              <div className="h-[85vh] w-full relative overflow-hidden ">
                <Image
                  className=" scale-img"
                  src={items[2][0].imageone.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 text-color-brand">
                <p>{items[2][0].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[2][0].title}
                </h1>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:block xl:block 2xl:block">
            <div className="grid grid-cols-1 gap-3 bordert pt-3 md:border-0 xl:border-0 2xl:border-0 md:pt-0 xl:pt-0 2xl:pt-0">
              <div className="h-[85vh] w-full relative overflow-hidden ">
                <Image
                  className=" scale-img"
                  src={items[2][1].imageone.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 text-color-brand">
                <p>{items[2][1].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[2][1].title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="h-40 md:h-70 lg:h-80 xl:h-80 2xl:h-80 py-5 borderb fz-35 md:fz-80 xl:fz-80 2xl:fz-80">
          <h2>{items[3][0].heading}</h2>
        </section>
        <section className=" w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 grid py-5 borderb">
          <div className="w-full h-[95vh] md:border-0 xl:border-0 2xl:border-0 col-span-1 relative overflow-hidden ">
            <Image
              src={items[4][0].imageone.url}
              className=" scale-img"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 bordert pt-3 md:border-0 xl:border-0 2xl:border-0 md:pt-0 xl:pt-0 2xl:pt-0">
              <div className="h-[75vh] w-full relative overflow-hidden ">
                <Image
                  src={items[4][0].imagetwo.url}
                  className=" scale-img"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 text-color-brand">
                <p>{items[4][0].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[4][0].title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          <div className="">
            <div className="aspect-square relative">
              <Image
                src={items[5][0].imageone.url}
                className=" scale-img"
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15 xl:fz-15 2xl:fz-15">
              <p>{items[5][0].description}</p> <h1>{items[5][0].title}</h1>
            </div>
          </div>
          <div className="">
            <div className="aspect-square relative">
              <Image
                src={items[5][1].imageone.url}
                alt=""
                layout="fill"
                objectFit="cover"
                className=" scale-img"
              />
            </div>
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15 xl:fz-15 2xl:fz-15">
              <p>{items[5][1].description}</p> <h1>{items[5][1].title}</h1>
            </div>
          </div>
          <div className="">
            <div className="aspect-square relative">
              <Image
                src={items[5][2].imageone.url}
                alt=""
                layout="fill"
                objectFit="cover"
                className=" scale-img"
              />
            </div>
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15 xl:fz-15 2xl:fz-15">
              <p>{items[5][2].description}</p> <h1>{items[5][2].title}</h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const document = await client.getSingle("homepage");

  let products = await client.getAllByType("product");

  function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }
  products = shuffleArray(products).slice(0, 4);
  return {
    props: {
      document,
      products,
    }, // will be passed to the page component as props
  };
}

export default Home;
