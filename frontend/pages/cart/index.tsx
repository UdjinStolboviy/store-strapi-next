import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";
import StyledCart from "./styled-cart";

export type LoginForm = {
  identifier: string;
  password: string;
};

const Cart: NextPage = () => {
  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: LoginForm) => {
    dispatch(login(data));
  };

  return (
    <StyledCart>
      <h3>{error}</h3>
    </StyledCart>
  );
};

export default Cart;
