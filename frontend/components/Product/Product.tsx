import { FC, useState } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Product as ProductType } from "@/types";
import { ProductLink, ProductStyled, Wrapper } from "./styles";
import { IconButton } from "../IconButton";
import { Input } from "../Input/Input";

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
}) => {
  const [valueProduct, setValueProduct] = useState("");
  const minusProduct = () => {
    if (Number(valueProduct) > 0) {
      const value = Number(valueProduct) - 1;
      setValueProduct(value.toString());
    }
  };
  const plusProduct = () => {
    const value = Number(valueProduct) + 1;
    setValueProduct(value.toString());
  };
  const onChangeProduct = (e: any) => {
    if (e.target.value === "") {
      setValueProduct("");
    }
    e.target.value && setValueProduct(e.target.value);
  };
  return (
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
        <Link legacyBehavior href={link} passHref>
          <IconButton
            name={"InProduct"}
            size={1.5}
            onClick={() => console.log("onPressCar")}
          />
        </Link>
        <IconButton name={"MinusProduct"} size={1.5} onClick={minusProduct} />
        <div className="wrapperInput">
          <Input
            placeholder={"шт"}
            width={7}
            height={4}
            value={valueProduct ? valueProduct : ""}
            onChange={onChangeProduct}
          />
        </div>
        <IconButton name={"PluseProduct"} size={1.5} onClick={plusProduct} />
        <IconButton
          name={"AddProduct"}
          size={1.5}
          onClick={() => console.log("onPressCar")}
        />
      </div>
      {children}
    </ProductStyled>
  );
};

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
