import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Products } from "@/components/Product";
import { ApiService } from "@/api/apiServices";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Product as ProductType, Response } from "@/types";
import { useEffect, useLayoutEffect } from "react";
import { addAbout } from "@/services/aboutSlice";
import "animate.css";

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export async function getStaticProps() {
  const apiServes = new ApiService();
  const products = await apiServes.getProduct();
  const abouts = await apiServes.getAbout();

  const status = products?.error?.status && abouts?.error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        products: [],
        abouts: [],
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      products,
      abouts,
    },
    revalidate: 60,
  };
}

let showe = false;
const Home: NextPage = ({ products, abouts }: any) => {
  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();

  useIsomorphicEffect(() => {
    if (abouts.data && !showe) {
      dispatch(addAbout(abouts.data));
      showe = true;
    }
  }, []);

  const filterProductsAddCart = (products: ProductType[]) => {
    const resultSort: ProductType[] = [];
    if (dataCart.length === 0) {
      return products;
    }
    products.forEach((product) => {
      const check = dataCart.find(
        (item: ProductType) => item.id === product.id
      );
      if (!check) {
        resultSort.push(product);
      }
    });
    return resultSort;
  };
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>FishStore</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products
        products={filterProductsAddCart(products.data)}
        strapi_url={String(strapi_url)}
      />
    </div>
  );
};

export default Home;
