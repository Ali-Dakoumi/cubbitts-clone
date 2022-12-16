import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Layout from "../components/Layout";
import { createContext, useEffect, useState } from "react";
export const FavContext = createContext(null);
export const CartContext = createContext(null);
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [favourites, setFavourites] = useState([]);
  const [items, setItems] = useState([]);
  const [cartClose, setCartClose] = useState(false);
  const [close, setClose] = useState(false);
  const [favState, setFavState] = useState(false);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("ls-products", JSON.stringify(items));
  };
  const addFavProduct = (product, title) => {
    let newFavouriteList = [...favourites];
    let bool = newFavouriteList.some(
      (favproduct) => favproduct.data.title === title
    );
    if (bool) {
      newFavouriteList = newFavouriteList.filter(
        (favproduct) => favproduct.data.title !== title
      );
    } else {
      newFavouriteList.push(product);
    }
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
    setFavState(!favState);
  };
  const removeProduct = (id) => {
    const temp = favourites.filter((product) => {
      return product.id !== id;
    });
    setFavourites(temp);
    localStorage.setItem("ls-products", JSON.stringify(temp));
    setFavState(!favState);
  };
  const getProducts = () => {
    const productFavourites = JSON.parse(localStorage.getItem("ls-products"));
    if (productFavourites) {
      setFavourites(productFavourites);
    }
  };

  useEffect(() => {
    getProducts();
  }, [close]);
  if (router.pathname === "/checkout") {
    return (
      <CartContext.Provider
        value={{ items, setItems, cartClose, setCartClose }}
      >
        <FavContext.Provider
          value={{
            favourites,
            setFavourites,
            close,
            setClose,
            addFavProduct,
            removeProduct,
          }}
        >
          <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={({ href, children, ...props }) => (
              <Link href={href}>
                <a {...props}>{children}</a>
              </Link>
            )}
          >
            <PrismicPreview repositoryName={repositoryName}>
              <Component {...pageProps} />
            </PrismicPreview>
          </PrismicProvider>
        </FavContext.Provider>
      </CartContext.Provider>
    );
  }
  return (
    <CartContext.Provider value={{ items, setItems, cartClose, setCartClose }}>
      <FavContext.Provider
        value={{
          favourites,
          setFavourites,
          close,
          setClose,
          addFavProduct,
          removeProduct,
        }}
      >
        <PrismicProvider
          linkResolver={linkResolver}
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PrismicPreview>
        </PrismicProvider>
      </FavContext.Provider>
    </CartContext.Provider>
  );
}
