import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";

import { CenteredTile } from "@/components/Tile";
import { Button } from "@/components/Button";
import { NextPage } from "next";

const User: NextPage = () => {
  const router = useRouter();
  const { username, email, error } = useSelector<RootState, RootState["user"]>(
    selectUser
  );
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

  return username && email ? (
    <CenteredTile header="Ваш акаунт">
      <h3>Імя: {username}</h3>
      <h3>email: {email}</h3>
      <Button onClick={logoutHandler}>Вихід з акаунту</Button>
    </CenteredTile>
  ) : null;
};

export default User;
