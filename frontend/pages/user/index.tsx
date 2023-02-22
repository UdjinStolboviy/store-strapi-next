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

export async function getStaticProps() {
  const apiServes = new ApiService();
  const orders = await apiServes.getOrder();

  const status = orders?.error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        orders: [],
      },
      revalidate: 10,
    };
  }

  return {
    props: {
      orders,
    },
    revalidate: 60,
  };
}

const User: NextPage = ({ orders }: any) => {
  const router = useRouter();
  const { username, email, error, wholesale_user } = useSelector<
    RootState,
    RootState["user"]
  >(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const [ordersList, setOrdersList] = useState<OrderType[]>([]);

  const ordersResult: OrderType[] = orders.data.filter((order: OrderType) => {
    return order.attributes.email === email;
  });

  console.log("---------------", ordersResult, email);

  useEffect(() => {
    if (!username || Boolean(error)) {
      dispatch(logout());
      router.push("/login");
    }
    // if (email) {
    //   if (orders.data) {
    //     orders.data.map((order: OrderType) => {
    //       if (order.attributes.email === email) {
    //         setOrdersList((prev) => [...prev, order]);
    //       }
    //     });
    //   }
    // }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/");
  };

  return username && email && ordersResult.length > 0 ? (
    <CenteredTile header="Ваш акаунт">
      <h3>Імя: {username}</h3>
      <h3>Email: {email}</h3>
      <div className="hr-login"></div>
      <Button onClick={logoutHandler}>Вихід з акаунту</Button>
      <div>
        <Collapse.Group>
          {ordersResult.map((order: OrderType, index) => {
            return (
              <Collapse title={order.attributes.orderid} key={index}>
                <Text css={{ color: `${({ theme }) => theme.font.regular}` }}>
                  {order.attributes.text_order}
                </Text>
              </Collapse>
            );
          })}
        </Collapse.Group>
      </div>
    </CenteredTile>
  ) : (
    <div className="positionCenter">
    <Loading size="lg" />
    </div>
  );
};

export default User;
