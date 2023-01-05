import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Product as ProductType } from "@/types";
import { ProductLink, ProductStyled, Wrapper } from "./styles";
import { IconButton } from "../IconButton";

export type ProductProps = {
  /** Header string */
  header: string;
  /** Link address */
  link: string;
  /** Image props */
  imageProps: ImageProps;
  /** Subtitle string */
  subtitle: string;
};

export const Product: FC<ProductProps> = ({
  children,
  header,
  link,
  imageProps,
  subtitle,
}) => (
  <ProductStyled>
    <Link legacyBehavior href={link} passHref>
      <ProductLink>
        <Image {...imageProps} alt={header} />
      </ProductLink>
    </Link>
    <div className="wrapperDescriptionProduct">
      <h3>{header}</h3>
      <h4>{subtitle}</h4>
      {/* <time dateTime={publishedAt}>
              {new Date(publishedAt).toDateString()}
            </time> */}
    </div>
    <div className="wrapperButtonProduct">
      <IconButton
        name={"LinkProduct"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
      <IconButton
        name={"InProduct"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
      <IconButton
        name={"AddProduct"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
    </div>
    {children}
  </ProductStyled>
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
          subtitle={subtitle}
          imageProps={{
            width,
            height,
            alt: `Cover for ${header}`,
            src: `${strapi_url}${url}`,
          }}
        ></Product>
      )
    )}
  </Wrapper>
);
