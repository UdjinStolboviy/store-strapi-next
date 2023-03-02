import React from "react";

// Styles
import { FooterMobileStyled } from "./styles";

import { useSelector } from "react-redux";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { StyledBottomIndicator } from "../Layout/components";
import { Product } from "@/types";
import { RootState } from "@/store";

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
}: IFooterMobileProps) => {
  const dataAbout: any = useSelector((state: RootState) => {
    const res = state.about.about.flat() ?? null;
    return res.flat();
  });
  return (
    <FooterMobileStyled>
      <IconButton
        name={username ? "User" : "Login"}
        size={1.5}
        onClick={username ? onUserAcaunt : onLogin}
      />

      <div className="isDark">
        <IconButton
          name={!isDark ? "Moon" : "Sun"}
          size={1.5}
          onClick={() => toggleDark()}
        />
      </div>
      <Link href={"/about"} passHref legacyBehavior className="aboutButton">
        <IconButton name={"Message"} size={1.5} />
      </Link>
      <a href={`tel:${dataAbout.phone1}`} className="poneWrapper">
        {dataAbout.phone1}
        <div className="gepTelephone"></div>
        <IconButton
          name={"Phone2"}
          size={1.5}
          onClick={() => console.log("onPressPhone")}
        />
      </a>
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
};
export default FooterMobile;
