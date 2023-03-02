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
import { IconButton } from "@/components/IconButton";
import { StyleSocialList } from "@/components/footer/styles";
import { imageLoader } from "@/components/ImageLoader";
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
  const socialLinks = [
    {
      link: `${dataAbout.link_instogram ? dataAbout.link_instogram : "#"}`,
      src: "/images/instagram.svg",
    },
    {
      link: `${dataAbout.link_fb ? dataAbout.link_fb : "#"}`,
      src: "/images/facebook.svg",
    },
  ];

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
      <CenteredTile header={"Tropical Fish Store"}>
        <WrapperAbout>
          <ImageContainerAbout maxWidth={`${width}px`}>
            <Image
              layout="fill"
              alt={`Cover for FishStore`}
              src={`${strapi_url}${url}`}
              objectFit="contain"
            />
          </ImageContainerAbout>
          <h1>Номер телефону:</h1>
          <div className="wrapperTelephone">
            <a href={`tel:${dataAbout.phone1}`}>
              {dataAbout.phone1}
              <div className="gepTelephone"></div>
              <IconButton
                name={"Phone2"}
                size={1.5}
                onClick={() => console.log("onPressPhone")}
              />
            </a>

            <a href={`tel:${dataAbout.phone2}`}>
              {dataAbout.phone2}
              <div className="gepTelephone"></div>
              <IconButton
                name={"Phone2"}
                size={1.5}
                onClick={() => console.log("onPressPhone")}
              />
            </a>
          </div>
          <div className="gepHeightAbout"></div>
          <h1>Електрона пошта:</h1>
          <div className="wrapperTelephone">
            <a href={`mailto:${dataAbout.email}`}>
              {dataAbout.email}
              <div className="gepTelephone"></div>
              <IconButton
                name={"Message"}
                size={1.5}
                onClick={() => console.log("onPressPhone")}
              />
            </a>
          </div>
          <div className="gepHeightAbout"></div>
          <h1>Пронас:</h1>
          <p>{dataAbout.description_company}</p>
          <div className="gepHeightAbout"></div>
          <h1>Адреса:</h1>
          <p>{dataAbout.address}</p>
          <StyleSocialList>
            {socialLinks.map((navItem, index) => (
              <li key={navItem.link + index}>
                <a
                  href={navItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={navItem.src}
                    unoptimized={true}
                    width={28}
                    height={28}
                    loader={imageLoader}
                    alt={""}
                  ></Image>
                </a>
              </li>
            ))}
          </StyleSocialList>
        </WrapperAbout>
      </CenteredTile>
    </div>
  );
};

export default AboutPage;
