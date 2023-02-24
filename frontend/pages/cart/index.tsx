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
import React, { useEffect, useState } from "react";
import { ConditionalFeedback, TextArea } from "@/components/TextArea";
import { IOrder } from "@/api/types";
import { useForm } from "react-hook-form";
import { clearCart } from "@/services/cartSlice";
import moment from "moment";
import StyledInputRegistration from "../registration/styled-registration";
import { Input } from "@/components/Input";

export type LoginForm = {
  identifier: string;
  password: string;
};
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;
let numberOrder = "";
const Cart: NextPage = () => {
  const { username, email, error, wholesale_user } = useSelector<
    RootState,
    RootState["user"]
  >(selectUser);

  const dataCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();
  const apiService = new ApiService();
  const [dataInputArea, setDataInputArea] = React.useState<string | null>("");
  const [emailOrder, setEmailOrder] = React.useState<string>("user@gmail.com");
  const orderId = "TFS" + Math.floor(1000000 * Math.random());
  const dateOrder = moment().format("DD.MM.YYYY HH:mm");
  const [addOrder, setAddOrder] = useState<boolean>(false);

  //console.log("dataInputArea", infoOrderLocal);

  useEffect(() => {
    if (email) {
      setEmailOrder(email);
    }
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
    if (emailOrder && !validEmail(emailOrder)) {
      alert("Будь ласка введіть коректний email");
      return;
    }
    sentMessageTelegram();
    setupInfoToLocalStorage(dataInputArea ? dataInputArea : "");
    onOrder();
  };

  const clearStorage = () => {
    alert(`\n\nДЯКУЮ ЗА ПОКУПКУ !!!
    \nВаше замовлення № ${orderId} прийнято`);
    numberOrder = orderId;
    dispatch(clearCart());
    setAddOrder(true);
  };

  const textOrder = `Замовлення ${orderId} 
Час створення ${dateOrder}
  \n${dataCart
    .map((item: ProductType) => {
      const price = wholesale_user
        ? item.attributes.price_wholesale
        : item.attributes.price;
      return `${item.attributes.header} - ${item.quantity}(шт)*${price} грн = ${
        item.quantity * price
      } грн\n`;
    })
    .join("")}
Всього: ${dataCart
    .reduce(
      (acc: number, item: ProductType) =>
        acc +
        item.quantity *
          (wholesale_user
            ? item.attributes.price_wholesale
            : item.attributes.price),
      0
    )
    .toFixed(2)} грн
    \n
email: ${emailOrder} \n
Данні для звязку:\n${dataInputArea}`;

  const onOrder = async () => {
    try {
      const deteil: IOrder = {
        orderid: orderId,
        name: "string",
        email: emailOrder,
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
      clearStorage();
    } catch (error) {
      console.log(error);
    }
  };

  const sentMessageTelegram = async () => {
    try {
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

  const validEmail = (email: string) => {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(String(email).toLowerCase());
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

  const onChangeEmail = (e: any) => {
    if (!email) {
      setEmailOrder(email);
    }
    e.target.value && setEmailOrder(e.target.value);
  };

  const shoveProduct = () => {
    if (dataCart.length === 0 && !addOrder) {
      return (
        <div>
          <h1>Ваш кошик порожній</h1>
        </div>
      );
    }
    if (dataCart.length === 0 && addOrder) {
      return (
        <div>
          <h1>{`\n\nДЯКУЮ ЗА ПОКУПКУ !!!
    \nВаше замовлення № ${numberOrder} прийнято`}</h1>
        </div>
      );
    }

    return dataCart.map((product: ProductType) => (
      <Product
        key={product.id}
        wholesale={wholesale_user}
        header={product.attributes.header}
        link={`/product/${product.id}`}
        subtitle={product.attributes.subtitle}
        product={product}
        showRemoveToCart
        cart
        imageProps={{
          width: product.attributes.cover.data.attributes.formats.small.width,
          height: product.attributes.cover.data.attributes.formats.small.height,
          alt: `Cover for ${product.attributes.header}`,
          src: `${strapi_url}${product.attributes.cover.data.attributes.formats.small.url}`,
        }}
      />
    ));
  };

  const shoveTotal = () => {
    if (dataCart.length === 0) {
      return null;
    }

    return (
      <h2>{`Всього: ${dataCart
        .reduce(
          (acc: number, item: ProductType) =>
            acc +
            item.quantity *
              (wholesale_user
                ? item.attributes.price_wholesale
                : item.attributes.price),
          0
        )
        .toFixed(2)} грн`}</h2>
    );
  };

  return (
    <StyledCart>
      {shoveProduct()}
      <div className="hr-cart"></div>
      {shoveTotal()}
      <div className="hr-cart"></div>
      <h2>Ваш Еmail:</h2>
      <Input
        placeholder={"email"}
        width={"100%"}
        height={4}
        value={email ? email : emailOrder}
        onChange={onChangeEmail}
      />

      <div className="hr-cart"></div>
      <h2>Ваші коментарі до заказу:</h2>
      <div className="info-order">
        <TextArea
          placeholder={
            "*Будь ласка залиште тут ваші коментарі або данні доставки або як з вами звязатися це може бути номер телефону або посилання на ваш профіль в соціальній мережі. "
          }
          width={"25"}
          height={"15"}
          cols={33}
          rows={5}
          autoComplete="on"
          value={dataInputArea ? dataInputArea : ""}
          onChange={(item) => setDataInputArea(item.target.value)}
        />
      </div>
      <div className="order-button">
        <PrimaryButton onClick={() => submitOrder()}>
          {"Замовити"}
        </PrimaryButton>
      </div>
    </StyledCart>
  );
};

export default Cart;
