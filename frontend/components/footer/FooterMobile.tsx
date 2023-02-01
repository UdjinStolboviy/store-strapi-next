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
}

const FooterMobile = ({ dataCart }: IFooterMobileProps) => (
  <FooterMobileStyled>
    <Link href={"/cart"} passHref legacyBehavior>
      <div>
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
  </FooterMobileStyled>
);
export default FooterMobile;
