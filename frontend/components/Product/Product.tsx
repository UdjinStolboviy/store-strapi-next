import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Product as ProductType } from "@/types";
import { ProductLink, ProductStyled, Wrapper } from "./styles";
import { IconButton } from "../IconButton";
import { Input } from "../Input/Input";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeProduct } from "@/services/cartSlice";

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

  quantity?: number;

  showRemoveToCart?: boolean;
};

export const Product: FC<ProductProps> = ({
  children,
  header,
  link,
  imageProps,
  subtitle,
  product,
  showRemoveToCart,
}) => {
  const [productValue, setProductValue] = useState<ProductType>(product);
  const [valueProduct, setValueProduct] = useState(
    productValue.quantity ? productValue.quantity.toString() : ""
  );

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if (productValue) {
      const product = {
        ...productValue,
        quantity: Number(valueProduct),
      };
      dispatch(addCart(product));
    }
  };

  const handleRemoveFromCart = () => {
    if (productValue) {
      const product = {
        ...productValue,
        quantity: Number(valueProduct),
      };
      dispatch(removeProduct(product));
    }
  };

  const viewRemoveToCart = () => {
    if (showRemoveToCart) {
      return (
        <IconButton
          name={"CancelCart"}
          size={1.5}
          onClick={handleRemoveFromCart}
        />
      );
    }
    return (
      <IconButton name={"AddProduct"} size={1.5} onClick={handleAddToCart} />
    );
  };

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
        <h3>{`${valueProduct} шт = ${
          product.attributes.price * Number(valueProduct)
        } грн`}</h3>
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
      <div className="wrapperDescription">
        <div className="wrapperDescriptionProduct">
          <h3>{header}</h3>
          <h3>{subtitle}</h3>
        </div>

        <div className="wrapperDescriptionProductPrice">
          <h3>{`${product.attributes.price} грн / шт`}</h3>
          {showeAllPrice()}
        </div>
      </div>

      <div className="wrapperButtonProduct">
        <div className="wrapperFunctionButton">
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
          <div className="showeDiscriptionProduct">
            <h3>{`${product.attributes.price} грн / шт`}</h3>
            {showeAllPrice()}
          </div>
        </div>
        <div className="wrapperAddCartButton">
          <IconButton name={"MinusProduct"} size={1.5} onClick={minusProduct} />
          <div className="wrapperInput">
            <Input
              placeholder={"шт"}
              width={7}
              height={4}
              value={valueProduct ? valueProduct : productValue.quantity}
              onChange={onChangeProduct}
            />
          </div>
          <IconButton name={"PluseProduct"} size={1.5} onClick={plusProduct} />
          {viewRemoveToCart()}
        </div>
      </div>
      {children}
    </ProductStyled>
  );
};

export const Products: FC<{ products: ProductType[]; strapi_url: string }> = ({
  products,
  strapi_url,
}) => {
  return (
    <Wrapper>
      {products.map((product: ProductType) => (
        <Product
          key={product.id}
          header={product.attributes.header}
          link={`/product/${product.id}`}
          subtitle={product.attributes.subtitle}
          product={product}
          quantity={product.quantity ? product.quantity : ""}
          imageProps={{
            width: product.attributes.cover.data.attributes.formats.small.width,
            height:
              product.attributes.cover.data.attributes.formats.small.height,
            alt: `Cover for ${product.attributes.header}`,
            src: `${strapi_url}${product.attributes.cover.data.attributes.formats.small.url}`,
          }}
        />
      ))}
    </Wrapper>
  );
};
