import React from "react";
import Image from "next/image";

import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { FooterDesktopStyled, StyleEmail, StyleSocialList } from "./styles";
import { imageLoader } from "../ImageLoader";

const FooterDesktop = () => {
  const dataAbout: any = useSelector((state: RootState) => {
    const res = state.about.about.flat() ?? null;
    return res.flat();
  });

  if (dataAbout.length === 0) {
    return <div></div>;
  }

  const socialLinks = [
    {
      link: `${
        dataAbout[0]?.attributes?.link_instagram
          ? dataAbout[0]?.attributes?.link_instagram
          : "#"
      }`,
      src: "/images/instagram.svg",
    },
    {
      link: `${
        dataAbout[0]?.attributes?.link_fb
          ? dataAbout[0]?.attributes?.link_fb
          : "#"
      }`,
      src: "/images/facebook.svg",
    },
  ];

  return (
    <FooterDesktopStyled>
      <div>
        <nav>
          <StyleEmail>
            <a
              href="mailto:hello@icoe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dataAbout[0].attributes?.email ?? "email@gmail.com"}
            </a>
          </StyleEmail>
          <StyleSocialList>
            {socialLinks.map((navItem, index) => (
              <li key={navItem.link + index}>
                <a
                  href={navItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
};
export default FooterDesktop;
