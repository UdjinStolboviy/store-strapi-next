import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Products } from "@/components/Product";
import { ApiService } from "@/api/apiServices";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getStaticProps() {
  const apiServes = new ApiService();
  const products = await apiServes.getProduct();

  const status = products?.error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        products: [],
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
}

const Home: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>FishStore</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products products={products.data} strapi_url={String(strapi_url)} />
    </>
  );
};

export default Home;
