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
  /** Product object */
  product: ProductType;
};

export const Product: FC<ProductProps> = ({
  children,
  header,
  link,
  imageProps,
  subtitle,
  product,
}) => {
  const [valueProduct, setValueProduct] = useState("");
  const [productValue, setProductValue] = useState<ProductType>(product);
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
  const showeAllPrice = () => {
    if (valueProduct) {
      return (
        <h4>{`${valueProduct} шт = ${
          product.attributes.price * Number(valueProduct)
        } грн`}</h4>
      );
    }
    return null;
  };
  return (
    <ProductStyled>
      <Link legacyBehavior href={link} passHref>
        <ProductLink>
          <Image {...imageProps} alt={header} />
        </ProductLink>
      </Link>
      <div className="wrapperDescriptionProduct">
        <h4>{header}</h4>
        <h4>{subtitle}</h4>
        <h4>{`${product.attributes.price} грн / шт`}</h4>
        {showeAllPrice()}
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
    {products?.map((product: ProductType) => (
      <Product
        key={product.id}
        header={product.attributes.header}
        link={`/product/${product.id}`}
        subtitle={product.attributes.subtitle}
        product={product}
        imageProps={{
          width: product.attributes.cover.data.attributes.formats.large.width,
          height: product.attributes.cover.data.attributes.formats.large.height,
          alt: `Cover for ${product.attributes.header}`,
          src: `${strapi_url}${product.attributes.cover.data.attributes.formats.large.url}`,
        }}
      />
    ))}
  </Wrapper>
);
