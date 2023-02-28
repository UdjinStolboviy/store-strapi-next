import React from "react";
import Image from "next/legacy/image";

// Styles
import { FooterMobileStyled, StyleEmail } from "./styles";
import { imageLoader } from "../ImageLoader";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { StyledBottomIndicator } from "../Layout/components";
import { Product } from "@/types";

interface IFooterMobileProps {
  dataCart: Product[];
  username: string;
  isDark: boolean;
  toggleDark: () => void;
  onLogin: () => void;
  onUserAcaunt: () => void;
}

const FooterMobile = ({
  dataCart,
  username,
  isDark,
  toggleDark,
  onLogin,
  onUserAcaunt,
}: IFooterMobileProps) => (
  <FooterMobileStyled>
    <IconButton
      name={username ? "User" : "Login"}
      size={1.5}
      onClick={username ? onUserAcaunt : onLogin}
    />

    <IconButton
      name={!isDark ? "Moon" : "Sun"}
      size={1.5}
      onClick={() => toggleDark()}
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
  </FooterMobileStyled>
);
export default FooterMobile;
