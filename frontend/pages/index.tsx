import { NextPage, GetStaticProps } from "next";
import Head from "next/head";


import { Products } from "@/components/Product";
import { ApiService } from "@/api/apiServices";
import { useRouter } from "next/router";
import ErrorPage from 'next/error'

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
export async function getStaticProps() {
  const apiServes = new ApiService();
  const posts = await apiServes.getProduct();
  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
   
  return (
    <>
      <Head>
        <title>FishStore</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products products={posts.data} strapi_url={String(strapi_url)} />
    </>
  );
};

export default Home;
