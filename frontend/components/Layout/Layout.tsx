import { useState, useLayoutEffect, useEffect, FC, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@emotion/react";

import { AppDispatch, RootState } from "@/store";
import { Themes } from "@/styles/themes";
import { login, selectUser } from "@/services/userSlice";

import { IconButton } from "@/components/IconButton";

import {
  Wrapper,
  LogoLink,
  StyledLogo,
  MainNav,
  SearchInput,
  Content,
  StyledBottomIndicator,
} from "./components";
import Footer from "../footer/FooterMobile";
import FooterMobile from "../footer/FooterMobile";
import FooterDesktop from "../footer/FooterDeskstop";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Layout: FC = ({ children }) => {
  const router = useRouter();
  const { q } = router.query;
  const [query, setQuery] = useState(q);

  const { username, email } = useSelector<RootState, RootState["user"]>(
    selectUser
  );
  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const dataCart = useSelector((state: RootState) => {
    return state.cart.cart;
  });

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  useIsomorphicLayoutEffect(() => {
    dispatch(login());
    const theme = localStorage.getItem("theme");
    const themeExistsInStorage = Boolean(theme !== null);

    setIsDark(
      themeExistsInStorage
        ? Boolean(theme === "dark")
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
    if (value?.length >= 2) {
      router.push({
        pathname: "/search",
        query: { q: value },
      });
    }
    if (!value) {
      router.push("/");
    }
  };

  const onLogin = () => {
    router.push("/login");
  };

  const onUserAcaunt = () => {
    router.push({
      pathname: "/user",
      query: {
        email,
      },
    });
  };

  useEffect(() => {
    q && setQuery(q);
    if (query && !q) {
      setQuery("");
    }
  }, [q]);

  const theme = Themes[isDark ? "dark" : "light"];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Link href="/" passHref legacyBehavior>
          <LogoLink>
            <StyledLogo size={3}>
              <span className="logo_short">Store Fish</span>
              <span className="logo_full">Tropical Fish Store</span>
            </StyledLogo>
          </LogoLink>
        </Link>
        <div className="wrapperNav">
          <MainNav>
            <IconButton
              name={username ? "User" : "Login"}
              size={1.5}
              onClick={username ? onUserAcaunt : onLogin}
            />

            <IconButton
              name={!isDark ? "Moon" : "Sun"}
              size={1.5}
              onClick={toggleDark}
            />
            <Link href={"/about"} passHref legacyBehavior>
              <IconButton name={"Message"} size={1.5} />
            </Link>

            <Link href={"/cart"} passHref legacyBehavior>
              <div className="warraperIndicator">
                <IconButton
                  name={"Cart"}
                  size={1.5}
                  onClick={() => console.log("onPressCar")}
                />
                {dataCart.length > 0 && (
                  <StyledBottomIndicator>
                    <span className="bobble">{dataCart.length}</span>
                  </StyledBottomIndicator>
                )}
              </div>
            </Link>
            <Link href={"/"} passHref legacyBehavior>
              <IconButton name={"Home"} size={1.5} />
            </Link>
          </MainNav>
          <SearchInput
            icon="Search"
            placeholder="Пошук"
            value={query}
            onChange={searchChange}
          />
        </div>
        <Content>{children}</Content>
        <FooterMobile
          dataCart={dataCart}
          isDark={isDark}
          username={username}
          onLogin={() => onLogin()}
          onUserAcaunt={() => onUserAcaunt()}
          toggleDark={() => toggleDark()}
        />
        <FooterDesktop />
      </Wrapper>
    </ThemeProvider>
  );
};
