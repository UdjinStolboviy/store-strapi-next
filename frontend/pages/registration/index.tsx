import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { RootState, AppDispatch } from "@/store";
import {
  selectUser,
  registration,
  RegistrationData,
} from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Input, ConditionalFeedback } from "@/components/Input";
import { Button } from "@/components/Button";
import { StyledLink } from "@/components/StyledLink";
import StyledInputRegistration from "./styled-registration";

const Registration: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();
  const router = useRouter();

  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  if (Boolean(jwt) && !error) {
    router.push("/user");
  }

  const onSubmit = (data: RegistrationData) => {
    dispatch(registration(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Зареєструватися">
        <h3>
          <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
        <StyledInputRegistration
          label="Ваше імя"
          placeholder="Ваше імя"
          width={"100%"}
          feedback={
            <ConditionalFeedback>
              {errors.username?.message}
            </ConditionalFeedback>
          }
          {...register("username", {
            required: "Обов'язкове поле!",
            minLength: { value: 6, message: "Мінімальна дожина 6!" },
            pattern: {
              value: /^[\w\d\s]+$/,
              message: "Тільки літери, цифри та пробіли!",
            },
          })}
        />
        <StyledInputRegistration
          label="email"
          feedback={
            <ConditionalFeedback>{errors.email?.message}</ConditionalFeedback>
          }
          placeholder="email"
          width={"100%"}
          type="email"
          {...register("email", {
            required: "Обов'язкове поле!",
            pattern: {
              value: /^\S+@\S+$/,
              message: "Неправильно ведений email!",
            },
          })}
        />
        <StyledInputRegistration
          label="Пароль"
          type="password"
          role="textbox"
          feedback={
            <ConditionalFeedback>
              {errors.password?.message}
            </ConditionalFeedback>
          }
          placeholder="Пароль"
          {...register("password", {
            required: "Обов'язкове поле!",
            minLength: { value: 8, message: "Мінімум символів 8!" },
          })}
        />
        <Button type="submit">Зареєструватися</Button>

        <div className="hr-login"></div>

        <Button
          onClick={() => {
            router.push("/login");
          }}
        >
          Зайти в акаунт
        </Button>
      </CenteredTile>
    </form>
  );
};

export default Registration;
