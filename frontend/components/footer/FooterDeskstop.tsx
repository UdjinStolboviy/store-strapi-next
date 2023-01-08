import React from "react";
import Image from "next/image";

// Styles
import { FooterDesktopStyled, StyleEmail, StyleSocialList } from "./styles";
import { imageLoader } from "../ImageLoader";

const socialLinks = [
  {
    link: "https://www.im/",
    src: "/images/instagram.svg",
  },
  {
    link: "https://www.facebook.com/de",
    src: "/images/facebook.svg",
  },
];

const FooterDesktop = () => (
  <FooterDesktopStyled>
    <div>
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
                  alt={""}
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
    </div>
  </FooterDesktopStyled>
);
export default FooterDesktop;
