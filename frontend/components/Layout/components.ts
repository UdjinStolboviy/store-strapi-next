import styled from "@emotion/styled";

import { StyledLink } from "@/components/StyledLink";
import { Logo } from "@/components/Logo";
import { Input } from "@/components/Input";

export const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;
 // border: 4px solid #000;


  grid-template-areas:
    "header  nav"
    "search  search"
    "content content"
    "footer  footer";
  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 2vmin;
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-areas:
      "header  search  nav"
      "content content content"
      "footer  footer  footer";
  }
`;

export const LogoLink = styled(StyledLink)`
  padding-right: 1vw;
`;

export const StyledBottomIndicator = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 3px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0CB3A1;
    & span {
      width: 30;
      height: 30;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      text-align: center;
      line-height: 30px;
    }
  
  `;

export const StyledLogo = styled(Logo)`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 4rem;
  & .logo_full {
    display: none;
  }
  @media (min-width: 560px) {
    & .logo_short {
      display: none;
    }
    & .logo_full {
      display: inline;
    }
  }
`;

export const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2vmin;
`;

export const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;

export const Content = styled.main`
  grid-area: content;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;
