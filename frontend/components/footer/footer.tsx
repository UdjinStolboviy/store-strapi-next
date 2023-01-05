import React from "react";
import Image from "next/legacy/image";

// Styles
import { FooterStyled, StyleEmail, StyleSocialList } from "./styles";
import { imageLoader } from "../ImageLoader";
import Link from "next/link";
import { IconButton } from "../IconButton";

// const socialLinks = [
//   {
//     link: "https://www.im/",
//     src: "/images/instagram.svg",
//   },
//   {
//     link: "https://www.facebook.com/de",
//     src: "/images/facebook.svg",
//   },
// ];

const Footer = () => (
  <FooterStyled>
    <Link href={"/cart"} passHref legacyBehavior>
      <IconButton
        name={"Cart"}
        size={1.5}
        onClick={() => console.log("onPressCar")}
      />
    </Link>
    {/* <div>
      <nav>
        <StyleEmail>
          <a
            href="mailto:hello@icoe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@sdgsgs.com
          </a>
        </StyleEmail>
        <StyleSocialList>
          {socialLinks.map((navItem, index) => (
            <li key={navItem.link + index}>
              <a href={navItem.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={navItem.src}
                  unoptimized={true}
                  width={28}
                  height={28}
                  loader={imageLoader}
                ></Image>
              </a>
            </li>
          ))}
        </StyleSocialList>
      </nav>
      <div className="footer-wrapper-privacy ">
        <p>©udjin 2011 — 2022</p>
        <ul className="footer-privacy">
          <li>
            <a
              href={"https://de.com/privacy-policy/"}
              target="_blank"
              rel="noreferrer"
            >
              Адресса и контакти
            </a>
          </li>
          <li>
            <a
              href={"https://.com/terms-of-use/"}
              target="_blank"
              rel="noreferrer"
            >
              Більше про нас
            </a>
          </li>
        </ul>
      </div>
    </div> */}
  </FooterStyled>
);
export default Footer;
