import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";
import { NextPage, GetServerSideProps } from "next";
import { Order as OrderType, Response } from "@/types";

import { ApiService } from "@/api/apiServices";
import { Collapse, Text, Loading } from "@nextui-org/react";

type OrdersResponce = Response<OrderType[]>;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiServes = new ApiService();

  const myOrder = (context?.query?.email as string) || null;
  if (!myOrder) {
    return {
      props: {
        orders: [],
      },
    };
  }
  const { data, error }: OrdersResponce = await apiServes.searchOrder(myOrder);

  const status = error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        error: error?.message,
      },
    };
  }

  return {
    props: {
      orders: data,
    },
  };
};

const User: NextPage<{ orders: OrderType[]; error?: string }> = ({
  orders: ssrOrders,
  error: ssrError,
}) => {
  const router = useRouter();
  const { email } = router.query;
  const [orders, setOrders] = useState<OrderType[] | undefined>(ssrOrders);
  const [error, setError] = useState<string | undefined>(ssrError);

  useEffect(() => {
    setOrders(ssrOrders);
    setError(ssrError);
  }, [email]);

  const { username, wholesale_user } = useSelector<
    RootState,
    RootState["user"]
  >(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!username || Boolean(error)) {
      dispatch(logout());
      router.push("/login");
    }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/");
  };

  return username && email && orders ? (
    <CenteredTile header="Ваш акаунт">
      <h3>Імя: {username}</h3>
      <h3>Email: {email}</h3>
      <div className="hr-login"></div>
      <div>
        <Collapse.Group>
          {orders.map((order: OrderType, index) => {
            return (
              <Collapse title={order.attributes.orderid} key={index}>
                <Text>{order.attributes.text_order}</Text>
              </Collapse>
            );
          })}
        </Collapse.Group>
      </div>
      <div className="hr-login"></div>
      <Button onClick={logoutHandler}>Вихід з акаунту</Button>
    </CenteredTile>
  ) : (
    <div className="positionCenter">
      <Loading size="lg" />
    </div>
  );
};

export default User;
