import Head from "next/head";
import { createClient } from "../../prismicio";
import { VscHeart } from "react-icons/vsc";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { CartContext, FavContext } from "../_app";
import { useContext } from "react";
import { RiHeartFill } from "react-icons/ri";
import Product from "../../components/Product";
import Image from "next/image";

const product = ({ product, document, products }) => {
  const fav = useContext(FavContext);
  const { favourites, addFavProduct } = fav;
  const { slices } = document.data;
  const myproducts = slices.map((slice) => slice?.items);
  const cartItems = useContext(CartContext);
  const { items, setItems, cartClose, setCartClose } = cartItems;
  const {
    id,
    data: { title, price, image, hover, description },
  } = product;
  const item = {
    price: product.data.price,
    id: product.id,
    name: product.data.title,
    image: product.data.image,
    quantity: 1,
    total: product.data.price,
    category: product.data.category.slug,
  };
  const saveCartToLS = (items) => {
    localStorage.setItem("ls-cart", JSON.stringify(items));
  };
  const toggleCart = () => {
    setCartClose(!cartClose);
  };
  const addItem = (item) => {
    let temp = [...items];
    let bool = false;
    const price = item.price;
    if (temp.length > 0) {
      temp.map((product) => {
        if (product.id === item.id) {
          bool = true;
        }
      });
    }
    bool ? (temp = [...temp]) : (temp = [...temp, item]);
    setItems(temp);
    saveCartToLS(temp);
    toggleCart();
  };
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      <main className="px-[25px] py-5 grid gap-4 grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xlg:grid-cols-12 borderb">
        <section className=" md:col-start-8 md:col-span-5 lg:col-start-8 lg:col-span-5 xl:col-start-8 xl:col-span-5 2xl:col-start-8 2xl:col-span-5">
          <div className="sticky top-14">
            <div className=" pt-16 pb-5 borderb">
              <h2 className="fz-23">{title}</h2>
              <h2 className="fz-15 mt-[5px] ">£{price}</h2>
              <div>
                <h2 className="text-right mt-[5px] flex justify-end">
                  <div className="cursor-pointer">
                    {favourites?.some((item) => item.id === id) ? (
                      <RiHeartFill
                        onClick={() => addFavProduct(product, title)}
                      />
                    ) : (
                      <VscHeart onClick={() => addFavProduct(product, title)} />
                    )}
                  </div>
                </h2>
              </div>
            </div>
            <div className="pt-5 pb-10 borderb flex items-top">
              <div className="w-[30%]">
                <div className="flex items-center ">
                  <h2 className="mr-1">Size</h2> <IoHelpCircleOutline />
                </div>
                <p className="mt-[5px] fz-13 text-body-light ">
                  Default: Medium
                </p>
              </div>
              <div>
                <button
                  className="mr-2 py-[0.35rem] px-1 bg-light-hover min-w-[35px] fz-13 rounded-[0.6rem] text-white"
                  href="#"
                >
                  M
                </button>
                <button
                  className="mr-2 py-[0.35rem] px-1 bg-light-hover min-w-[35px] fz-13  rounded-[0.6rem] text-white"
                  href="#"
                >
                  L
                </button>
                <button
                  className="mr-2 py-[0.35rem] px-1 bg-light-hover min-w-[35px] fz-13  rounded-[0.6rem] text-white"
                  href="#"
                >
                  XL
                </button>
              </div>
            </div>
            <div className="pt-5 pb-10 borderb flex items-top">
              <div className="w-[30%]">
                <h2>Colour</h2>
                <p className="mt-[5px] fz-13 text-body-light ">
                  Beachwood Fade
                </p>
              </div>
              <div className="flex justify-between">
                <div className="rounded-full mx-1 w-[20px] h-[20px]  bg-[#fb6d19] "></div>
                <div className="rounded-full mx-1 w-[20px] h-[20px] bg-[#9d532c] "></div>
                <div className="rounded-full mx-1 w-[20px] h-[20px] bg-black"></div>
                <div className="rounded-full mx-1 w-[20px] h-[20px] bg-[#2e3f57] "></div>
              </div>
            </div>
            <div className="pt-[15px] pb-6 ">
              <button
                onClick={() => addItem(item)}
                className="py-2 px-4 fz-15 bg-button-dark min-w-[285px]  text-left rounded-3xl text-white flex justify-between items-center"
              >
                Add to bag
                <HiArrowNarrowRight />
              </button>
            </div>
            <div className="py-5  ">
              <div className="borderb py-5">
                <h2>Description</h2>
              </div>
              <div className="py-5">
                <p className="fz-15"> {description[0]?.text} </p>
                <br />
                <ul className="list-disc ml-4">
                  {description.slice(1).map((item) => (
                    <li className="fz-15"> {item.text} </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-3 relative row-start-1 md:col-start-1 md:col-span-7 md:row-start-1 lg:col-start-1 lg:col-span-7 lg:row-start-1 xl:col-start-1 xl:col-span-7 xl:row-start-1 2xl:col-start-1 2xl:col-span-7 2xl:row-start-1">
          <img
            className="h-full w-full object-cover aspect-square"
            src={image.url}
            alt=""
          />
          {hover?.url && (
            <img
              className="h-full w-full object-cover aspect-square hidden md:block lg:block xl:block 2xl:block"
              src={hover.url}
              alt=""
            />
          )}
        </div>
      </main>
      <section className="pb-16 px-[25px] grid gap-x-3 gap-y-7 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-5 borderb ">
        <div className="col-span-1 row-span-2">
          <h1 className="fz-15 max-w-[75%] md:fz-30 xl:fz-38 2xl:fz-38 sticky top-16 ">
            {myproducts[0][0].title}
          </h1>
        </div>
        <div className="md:grid-span2 xl:grid-span2 2xl:grid-span2">
          <div className="grid grid-cols-2 gap-x-3 gap-y-7">
            {products.map((product) => (
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
      <section className="pb-16 px-[25px] grid gap-x-3 gap-y-7 grid-cols-1 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-5 borderb ">
        <div className="col-span-1 row-span-2">
          <h1 className="sm:pb-10 fz-15 md:fz-38 xl:fz-38 2xl:fz-38 sticky top-16 ">
            {slices[2].primary.title[0].text}
          </h1>
        </div>
        <div className="md:grid-span2 xl:grid-span2 2xl:grid-span2">
          <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-3 gap-y-7">
            {myproducts[2].map((item, i) => (
              <div key={i} className="grid gap-[10px] gridrow-minmax ">
                <div className="overflow-hidden aspect-square relative">
                  <Image
                    className="absolute"
                    layout="fill"
                    objectFit="cover"
                    src={item.image.url}
                    alt=""
                  />
                </div>
                <div className="mt-[6px] grid grid-cols-2">
                  <h2 className="fz3-15">{item.description}</h2>
                  <h2 className="fz3-15">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 px-[25px] border-b pt-5 grid gap-x-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
        <div>
          <h2 className="pb-5 fz-15 md:fz-30 xl:fz-38 2xl:fz-38 sticky top-16  ">
            {slices[1].primary.title[0].text}
          </h2>
        </div>
        <div className="col-span-2 grid gap-3 grid-cols-1">
          {myproducts[1].map((item) => (
            <img className="aspect-square" src={item.image.url} alt="" />
          ))}
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths({ previewData }) {
  const client = createClient({ previewData });

  const products = await client.getAllByType("product");
  const paths = products.map((product) => ({
    params: {
      uid: product.uid?.toString(),
    },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
export async function getStaticProps({ previewData, params }) {
  const client = createClient({ previewData });

  const product = await client.getByUID("product", params?.uid);
  const document = await client.getByUID("page", "product-page", {
    fetchLinks: [
      "product.price",
      "product.image",
      "product.title",
      "product.hover",
    ],
  });
  let products = await client.getAllByType("product");

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
    props: { product, document, products },
  };
}
export default product;
