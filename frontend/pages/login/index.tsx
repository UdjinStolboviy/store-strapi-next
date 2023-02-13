import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { RootState, AppDispatch } from "@/store";
import { selectUser, login } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import StyledInputLogin from "./styled-login";

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

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  const onSubmit = (data: LoginForm) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Логін">
        <h3>
          <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
        <StyledInputLogin
          label="Identifier"
          placeholder="Імя або email"
          feedback={
            <ConditionalFeedback>
              {errors.identifier?.message}
            </ConditionalFeedback>
          }
          height={8}
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
        <Button type="submit">Зайти в акаунт</Button>
        <h3>
          <Link href="/registration" passHref legacyBehavior>
            <StyledLink underline>СТВОРИТИ АКАУНТ</StyledLink>
          </Link>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default Login;
