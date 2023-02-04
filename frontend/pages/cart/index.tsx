import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";
import StyledCart from "./styled-cart";
import { ApiService } from "@/api/apiServices";
import { Product as ProductType } from "@/types";
import { Product } from "@/components/Product";
import { SecondaryButton } from "@/components/Button/Button";

export type LoginForm = {
  identifier: string;
  password: string;
};
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const Cart: NextPage = () => {
  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const apiService = new ApiService();

  const sentMesegTelegram = () => {
    try {
      const deteil = {
        text: "fsdfdsf",
        parse_mode: "kjdfksjdfk",
        chat_id: "sdsjfkdfj",
      };
      // await apiService.sendNotification(deteil);
    } catch (error) {
      console.log(error);
    }
  };

  const getBotUpdates = () =>
    fetch("https://api.telegram.org/bot{token}/getUpdates").then((response) =>
      response.json()
    );

  const getUserTelegramId = async (uniqueString) => {
    const { result } = await getBotUpdates();

    const messageUpdates = result.filter(
      ({ message }) => message?.text !== undefined
    );

    const userUpdate = messageUpdates.find(
      ({ message }) => message.text === `/start ${uniqueString}`
    );

    return userUpdate.message.from.id;
  };

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

      <SecondaryButton onClick={() => console.log("hdhdh")}>
        {"створити заказ"}
      </SecondaryButton>
    </StyledCart>
  );
};

export default Cart;
