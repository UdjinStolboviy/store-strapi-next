import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

import { useForm } from "react-hook-form";

import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import StyledInputLogin from "./styled-login";
import { Loading } from "@nextui-org/react";

export type LoginForm = {
  identifier: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const router = useRouter();

  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  const [showLoading, setShowLoading] = React.useState(false);

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  if (error) {
    console.log("error", error);
    setShowLoading(false);
  }

  const onSubmit = (data: LoginForm) => {
    setShowLoading(true);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Логін">
        <h3>
          <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
        <StyledInputLogin
          label="Імя або email"
          placeholder="Імя або email"
          feedback={
            <ConditionalFeedback>
              {errors.identifier?.message}
            </ConditionalFeedback>
          }
          height={8}
          width={"100%"}
          {...register("identifier", {
            required: "Обовязкове поле!",
            minLength: { value: 6, message: "Мінімум символів 6!" },
          })}
        />
        <StyledInputLogin
          label="Password"
          type="password"
          placeholder="Пароль"
          role="textbox"
          width={"100%"}
          feedback={
            <ConditionalFeedback>
              {errors.password?.message}
            </ConditionalFeedback>
          }
          height={8}
          {...register("password", {
            required: "Обовязкове поле!",
            minLength: { value: 8, message: "Мінімум символів 8!" },
          })}
        />
        {showLoading ? (
          <Loading size="lg" />
        ) : (
          <Button type="submit">Зайти в акаунт</Button>
        )}
        <div className="hr-login"></div>

        <Button
          onClick={() => {
            router.push("/registration");
          }}
        >
          Зареєструватися
        </Button>
      </CenteredTile>
    </form>
  );
};

export default Login;
