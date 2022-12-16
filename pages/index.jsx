import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import prismic, { createClient } from "../prismicio";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FavContext } from "./_app";
import Product from "../components/Product";

const Home = ({ document, products }) => {
  const { slices } = document.data;
  const items = slices.map((slice) => slice?.items);
  const fav = useContext(FavContext);
  const { favourites, addFavProduct } = fav;

  return (
    <div asscroll-container="true">
      <Head>
        <title>Cubitts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-[25px]  ">
        <section className=" w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-5 borderb">
          <div className="w-full h-[100vw] sm:h-[85vh] md:h-[85vh] md:border-0 col-span-1 relative overflow-hidden ">
            <Image
              src={items[0][0].imagetwo.url}
              className=" scale-img absolute"
              alt=""
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 bordert pt-3 md:border-0 md:pt-0">
              <div className="h-[100vw] sm:h-[60vh] md:h-[60vh] w-full relative overflow-hidden ">
                <Image
                  className=" scale-img"
                  src={items[0][0].imageone.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-color-brand">
                <p>{items[0][0].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[0][0].title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="grid gap-x-3 gap-y-7 grid-cols-1 md:grid-cols-3 py-5 borderb ">
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
          <div className="md:grid-span2">
            <div className="grid grid-cols-2 gap-x-3 gap-y-7">
              {products?.map((product, i) => (
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
        <section className="h-40 md:h-70 lg:h-80 xl:h-80 2xl:h-80 py-5 borderb fz-35 md:fz-80">
          <h2>{items[3][0].heading}</h2>
        </section>
        <section className=" w-full grid gap-3 grid-cols-1 md:grid-cols-2 py-5 borderb">
          <div className="w-full h-[95vh] md:border-0 col-span-1 relative overflow-hidden ">
            <Image
              src={items[4][0].imageone.url}
              className=" scale-img"
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 bordert pt-3 md:border-0 md:pt-0">
              <div className="h-[75vh] w-full relative overflow-hidden ">
                <Image
                  src={items[4][0].imagetwo.url}
                  className=" scale-img"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-color-brand">
                <p>{items[4][0].description}</p>
                <h1 className="text-2xl leading-[30px] text-center md:text-left xl:text-left 2xl:text-left">
                  {items[4][0].title}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 grid gap-3 grid-cols-1 md:grid-cols-3">
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
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15">
              <p className="text-xs ">{items[5][0].description}</p>{" "}
              <h1 className="text-xs ">{items[5][0].title}</h1>
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
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15">
              <p className="text-xs ">{items[5][1].description}</p>{" "}
              <h1 className="text-xs ">{items[5][1].title}</h1>
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
            <div className="grid grid-cols-2 pt-3 md:fz-13 lg:fz-15">
              <p className="text-xs ">{items[5][2].description}</p>{" "}
              <h1 className="text-xs ">{items[5][2].title}</h1>
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

  let products = await client.getAllByType("product", {
    predicates: [
      prismic.predicate.at("my.product.category", "YsRtHBAAACcABPFM"),
    ],
  });
  function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
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
    },
  };
}

export default Home;
