import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";
import { NextPage, GetServerSideProps } from "next";
import { Order as OrderType, Response } from "@/types";

import { ApiService } from "@/api/apiServices";

type OrdersResponce = Response<OrderType[]>;

const User: NextPage = () => {
  const router = useRouter();
  const { username, email, error } = useSelector<RootState, RootState["user"]>(
    selectUser
  );
  const dispatch = useDispatch<AppDispatch>();
  const apiService = new ApiService();

  // const getOrders = async (email: string) => {
  //   const { data, error }: OrdersResponce = await apiService.searchOrder(email);
  // };

  useEffect(() => {
    if (!username || Boolean(error)) {
      dispatch(logout());
      router.push("/login");
    }
    //  if (email) {
    //    getOrders(email);
    //  }
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/");
  };

  return username && email ? (
    <CenteredTile header="Ваш акаунт">
      <h3>Імя: {username}</h3>
      <h3>email: {email}</h3>
      <Button onClick={logoutHandler}>Вихід з акаунту</Button>
    </CenteredTile>
  ) : null;
};

export default User;
