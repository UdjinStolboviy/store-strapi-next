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
import React, { useEffect } from "react";
import { TextArea } from "@/components/TextArea";
import { IOrder } from "@/api/types";
import { clearCart } from "@/services/cartSlice";
import moment from "moment";

export type LoginForm = {
  identifier: string;
  password: string;
};
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
const Cart: NextPage = () => {
  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const apiService = new ApiService();
  const [dataInputArea, setDataInputArea] = React.useState<string | null>("");
  const orderId = "TFS" + Math.floor(1000000 * Math.random());
  const dateOrder = moment().format("DD.MM.YYYY HH:mm");

  //console.log("dataInputArea", infoOrderLocal);

  useEffect(() => {
    if (localStorage.getItem("info")) {
      setDataInputArea(localStorage.getItem("info"));
    }
  }, []);

  const submitOrder = () => {
    console.log("dataInputArea", dataInputArea);
    if (dataInputArea === "") {
      alert("Будь ласка залиште данні для звязку");
      return;
    }
    sentMessageTelegram();
    setupInfoToLocalStorage(dataInputArea ? dataInputArea : "");
    onOrder();
  };

  const clearStorage = () => {
    dispatch(clearCart());
  };

  const textOrder = `Замовлення ${orderId} 
Час створення ${dateOrder}
  \n${dataCart
    .map((item: ProductType) => {
      return `${item.attributes.header} - ${item.quantity}(шт)*${
        item.attributes.price
      } грн = ${item.quantity * item.attributes.price} грн\n`;
    })
    .join("")}
Всього: ${dataCart
    .reduce(
      (acc: number, item: ProductType) =>
        acc + item.quantity * item.attributes.price,
      0
    )
    .toFixed(2)} грн
    \n
Данні для звязку:\n${dataInputArea}`;

  const onOrder = async () => {
    try {
      const deteil: IOrder = {
        orderid: orderId,
        name: "string",
        email: "vlad@gmail.com",
        products: JSON.stringify(dataCart),
        address: dataInputArea ? dataInputArea : "",
        phone: "string",
        transaction: "string",
        amount: dataCart.length,
        status: "string",
        text_order: textOrder,
        date_created: dateOrder,
      };
      const respons = await apiService.setOrder(deteil);
      // clearStorage();
    } catch (error) {
      console.log(error);
    }
  };

  const sentMessageTelegram = async () => {
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

  const clearInfoLocalStorage = () => {
    localStorage.removeItem("info");
  };

  const setupInfoToLocalStorage = (result: string) => {
    localStorage.setItem("info", result);
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
          value={dataInputArea ? dataInputArea : ""}
          onChange={(item) => setDataInputArea(item.target.value)}
        />
      </div>
      <div className="order">
        <PrimaryButton onClick={() => submitOrder()}>
          {"створити заказ"}
        </PrimaryButton>
      </div>
    </StyledCart>
  );
};

export default Cart;
