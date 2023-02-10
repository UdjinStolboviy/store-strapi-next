import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { IAbout } from "@/types";
import { CenteredTile } from "@/components/Tile";
import { AppDispatch, RootState } from "@/store";
import { ApiService } from "@/api/apiServices";
import WrapperAbout, { ImageContainerAbout } from "./styled-about";
import "animate.css";
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getStaticProps() {
  const apiServes = new ApiService();
  const abouts = await apiServes.getAbout();

  const status = abouts?.error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        abouts: [],
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      abouts,
    },
    revalidate: 60,
  };
}

const AboutPage: NextPage = ({ abouts }: any) => {
  const dataAbout: IAbout = abouts.data[0].attributes;
  const width = dataAbout.logo.data.attributes.width;

  const url = dataAbout.logo.data.attributes.url;
  console.log("dataAbout", url);

  if (!dataAbout) {
    return <div></div>;
  }

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
          <a href={`tel:${dataAbout.phone1}`}>{dataAbout.phone1}</a>
          <a href={`tel:${dataAbout.phone2}`}>{dataAbout.phone2}</a>
        </WrapperAbout>
      </CenteredTile>
    </div>
  );
};

export default AboutPage;
