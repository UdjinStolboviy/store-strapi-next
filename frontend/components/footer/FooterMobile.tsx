import React from "react";
import Image from "next/legacy/image";

// Styles
import { FooterMobileStyled, StyleEmail } from "./styles";
import { imageLoader } from "../ImageLoader";
import Link from "next/link";
import { IconButton } from "../IconButton";

const FooterMobile = () => (
  <FooterMobileStyled>
    <Link href={"/cart"} passHref legacyBehavior>
      <IconButton
        name={"Cart"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
    </Link>
  </FooterMobileStyled>
);
export default FooterMobile;
