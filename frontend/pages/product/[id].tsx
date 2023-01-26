import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import MarkdownIt from "markdown-it";

import { Product as ProductType, Response } from "@/types";
import { CenteredTile } from "@/components/Tile";
import ImageContainerProduct, { CustomLinkProduct } from "./styled-product";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { ApiService } from "@/api/apiServices";

type ProductResponce = Response<ProductType>;
type ProductsResponce = Response<ProductType[]>;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const apiService = new ApiService();

    const res = await apiService.getProducts();

    const response: ProductsResponce = res;

    const status = response?.error?.status;

    if (status && (status < 200 || status >= 300)) {
      return {
        paths: [],
        fallback: true,
      };
    }

    const paths = response.data.map(({ id }) => `/product/${id}`);

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const apiService = new ApiService();

    const id = context?.params?.id;

    const res = await apiService.getProductsID(id as string);

    const { error, data, meta }: ProductResponce = res;

    if (error && (error?.status < 200 || error?.status >= 300)) {
      return {
        props: {
          product: {},
          meta: {},
        },
      };
    }

    const md = new MarkdownIt();

    return {
      props: {
        product: {
          ...data,
          attributes: {
            ...data.attributes,
            description: md.render(data.attributes.description),
          },
        },
        meta: meta,
      },
    };
  } catch (error) {
    return {
      props: {
        product: {},
        meta: {},
      },
    };
  }
};

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const ProductPage: NextPage<{
  product: ProductType;
  meta: ProductResponce["meta"];
}> = ({ product }) => {
  if (product && product?.attributes) {
    const {
      attributes: {
        header,
        link,
        description,
        publishedAt,
        cover: {
          data: {
            attributes: { url, width, height },
          },
        },
      },
    } = product;
    return (
      <>
        <Head>
          <title>Course: {header}</title>
          <meta name="description" content={header} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredTile header={header}>
          <ImageContainerProduct maxWidth={`${width}px`}>
            <Image
              layout="fill"
              alt={`Cover for ${header}`}
              src={`${strapi_url}${url}`}
              objectFit="contain"
            />
          </ImageContainerProduct>
          <Link href={link} passHref legacyBehavior>
            <CustomLinkProduct>
              Це посилання на стороній ресурс для детального ознайомлення з цім
              продуктом
            </CustomLinkProduct>
          </Link>
          <div
            style={{ maxWidth: width }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <h2>{new Date(publishedAt).toDateString()}</h2>
        </CenteredTile>
      </>
    );
  }
  return null;
};

export default ProductPage;
