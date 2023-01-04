import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Product as ProductType } from "@/types";
import {  ProductLink, ProductStyled, Wrapper } from "./styles";

export type Props = {
  /** Header string */
  header: string;
  /** Link address */
  link: string;
  /** Image props */
  imageProps: ImageProps;
};

export const Product: FC<Props> = ({ children, header, link, imageProps }) => (
  <Link legacyBehavior href={link} passHref>
    <ProductLink>
      <ProductStyled>
        <Image {...imageProps} alt={header} />
         <h2>{header}</h2>
        {children}
      </ProductStyled>
    </ProductLink>
  </Link>
);


export const Products: FC<{ products: ProductType[]; strapi_url: string }> = ({
  products,
  strapi_url,
}) => (
  <Wrapper>
    {products?.map(
      ({
        id,
        attributes: {
          header,
          subtitle,
          publishedAt,
          cover: {
            data: {
              attributes: {
                formats: {
                  medium: { url, width, height },
                },
              },
            },
          },
        },
      }) => (
        <Product
          key={id}
          header={header}
          link={`/product/${id}`}
          imageProps={{
            width,
            height,
            alt: `Cover for ${header}`,
            src: `${strapi_url}${url}`,
          }}
        >
          <h3>{subtitle}</h3>
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toDateString()}
          </time>
        </Product>
      )
    )}
  </Wrapper>
);
