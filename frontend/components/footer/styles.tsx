import { borderRadius, boxShadow } from "@/components/styles";
import StyleGuide from "@/styles/style-guide";

import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  grid-area: footer;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 95%;
  transform: translate(-50%, 0%);
  padding: 10px 10px 10px 10px;
  border-radius: 90px;
  border: 0.5px solid ${({ theme }) => theme.components.shadow2};
  background: ${({ theme }) => theme.background};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
`;
export const StyleEmail = styled.div`
  /* & a {
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #9e279b;
  }
  @media screen and (min-width: 320px) and (max-width: 770px) {
    width: 40%;
    & a {
      font-size: ${StyleGuide.FontStyles.title.h6.fontSize};
    }
  } */
`;
