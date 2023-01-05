import React from "react";
import Image from "next/legacy/image";

// Styles
import { FooterStyled, StyleEmail, StyleSocialList } from "./styles";
import { imageLoader } from "../ImageLoader";
import Link from "next/link";
import { IconButton } from "../IconButton";

const Footer = () => (
  <FooterStyled>
    <Link href={"/cart"} passHref legacyBehavior>
      <IconButton
        name={"Cart"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
    </Link>
  </FooterStyled>
);
export default Footer;
