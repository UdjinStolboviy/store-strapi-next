import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import MarkdownIt from "markdown-it";

import { Product as ProductType, Response } from "@/types";
import { CenteredTile } from "@/components/Tile";
import WrapperAbout, {ImageContainerAbout}from "./styled-about";
import "animate.css";
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const AboutPage: NextPage = () => {
  const width = '500';
  
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>FishStore</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenteredTile header={"FishStore"}>
        <WrapperAbout>
          <ImageContainerAbout maxWidth={`${width}px`}>
            <Image
              layout="fill"
              alt={`Cover for FishStore`}
              src={`${strapi_url}${url}`}
              objectFit="contain"
            />
          </ImageContainerAbout>
        </WrapperAbout>
      </CenteredTile>
    </div>
  );
};

export default AboutPage;
