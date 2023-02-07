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
import { SecondaryButton, PrimaryButton } from "@/components/Button/Button";
import React from "react";
import { TextArea } from "@/components/TextArea";
import { IOrder } from "@/api/types";

export type LoginForm = {
  identifier: string;
  password: string;
};
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const Cart: NextPage = () => {
  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const apiService = new ApiService();
  const [dataInputArea, setDataInputArea] = React.useState<string>("");

  console.log("dataInputArea", dataCart);

  const textOrder = `Замовлення \n${dataCart
    .map((item: ProductType) => {
      return `${item.attributes.header} - ${item.quantity}*${
        item.attributes.price
      } = ${item.quantity * item.attributes.price} \n`;
    })
    .join("")}Данні для звязку\n${dataInputArea}`;

  const onOrder = async () => {
    const orderId = "OID" + Math.floor(1000000 * Math.random());
    try {
      const deteil: IOrder = {
        orderid: orderId,
        name: "string",
        email: "jdjfjfjd@dhfhf.jfd",
        products: JSON.stringify(dataCart),
        address: dataInputArea,
        phone: "string",
        transaction: "string",
        amount: dataCart.length,
        status: "string",
        text_order: textOrder,
        date_created: new Date().getTime().toString(),
      };
      const respons = await apiService.setOrder(deteil);
    } catch (error) {
      console.log(error);
    }
  };

  const sentMesegTelegram = async () => {
    try {
      console.log("dataCart", dataCart);
      const deteil = {
        text: textOrder,
        parse_mode: "html",
        chat_id: "428707575",
      };
      const respons = await apiService.sendNotification(deteil);
    } catch (error) {
      console.log(error);
    }
  };

  const getBotUpdates = () =>
    fetch("https://api.telegram.org/bot{token}/getUpdates").then((response) =>
      response.json()
    );

  const getUserTelegramId = async (uniqueString: string) => {
    const { result } = await getBotUpdates();

    const messageUpdates = result.filter(
      ({ message }: any) => message?.text !== undefined
    );

    const userUpdate = messageUpdates.find(
      ({ message }: any) => message.text === `/start ${uniqueString}`
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
      <div className="info-order">
        <TextArea
          placeholder={"*Будь ласка залиште тут данні як з вами звязатися..."}
          width={"25"}
          height={"15"}
          cols={33}
          rows={5}
          autoComplete="on"
          onChange={(item) => setDataInputArea(item.target.value)}
        />
      </div>
      <div className="order">
        <PrimaryButton
          onClick={() => {
            sentMesegTelegram();
            onOrder();
          }}
        >
          {"створити заказ"}
        </PrimaryButton>
      </div>
    </StyledCart>
  );
};

export default Cart;
