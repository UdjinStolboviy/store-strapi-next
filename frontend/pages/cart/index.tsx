import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";
import StyledCart from "./styled-cart";
import { Product as ProductType } from "@/types";
import { Product } from "@/components/Product";

export type LoginForm = {
  identifier: string;
  password: string;
};
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const Cart: NextPage = () => {
  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledCart>
      {dataCart.map((product: ProductType) => (
        <Product
          key={product.id}
          header={product.attributes.header}
          link={`/product/${product.id}`}
          subtitle={product.attributes.subtitle}
          product={product}
          showRemoveToCart
          imageProps={{
            width: product.attributes.cover.data.attributes.formats.small.width,
            height:
              product.attributes.cover.data.attributes.formats.small.height,
            alt: `Cover for ${product.attributes.header}`,
            src: `${strapi_url}${product.attributes.cover.data.attributes.formats.small.url}`,
          }}
        />
      ))}
    </StyledCart>
  );
};

export default Cart;
