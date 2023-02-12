import { borderRadius, boxShadow } from "@/components/styles";
import StyleGuide from "@/styles/style-guide";

import styled from "@emotion/styled";
import { StyledLink } from "../StyledLink";

export const ProductStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 10px;
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  img {
    width: 100px;
    height: 100%;
    border-radius: 30px;
  }
  @media screen and (min-width: 319px) and (max-width: 437px) {
    .wrapperButtonProduct {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0px;
    }
    width: 100%;
    .wrapperDescriptionProductPrice {
      display: none;
    }
    .showeDiscriptionProduct {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .wrapperDescriptionProduct {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .wrapperInput {
      // width: 40px;
    }
    .wrapperFunctionButton {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wrapperAddCartButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 437px) and (max-width: 768px) {
    width: 100%;
    .wrapperDescriptionProduct {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .showeDiscriptionProduct {
      display: none;
    }
    .wrapperDescriptionProductPrice {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .wrapperButtonProduct {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0px;
    }
    .wrapperInput {
      // width: 40px;
    }
    .wrapperFunctionButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wrapperAddCartButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 1000px;
    flex-direction: row;
    max-height: 120px;
    align-items: center;
    justify-content: space-around;
    .wrapperDescription {
      width: 100%;
      display: flex;
    }
    .showeDiscriptionProduct {
      display: none;
    }

    .wrapperDescriptionProduct {
      width: 50%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .wrapperButtonProduct {
      width: 60%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wrapperFunctionButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wrapperAddCartButton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .wrapperInput {
      margin: 5px;
    }
    img {
      width: 100%;
      max-height: 100px;
      border-radius: 20px;
    }
  }
`;

export const ProductLink = styled(StyledLink)`
  display: flex;
  width: 100%;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // margin: 0 auto;
`;
