import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { Course as CourseType, Response } from "@/types";
import { Courses } from "@/components/Course";

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const Home: NextPage = ({ posts }: any) => {
  console.log(posts, "posts");
  return (
    <>
      <Head>
        <title>FishStore</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Courses courses={[]} strapi_url={String(strapi_url)} />
    </>
  );
};

export default Home;
