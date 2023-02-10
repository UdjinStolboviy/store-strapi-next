import styled from "@emotion/styled";
import { StyledLink } from "@/components/StyledLink";
import StyleGuide from "@/styles/style-guide";

const WrapperAbout = styled.div`
  width: 90%;
  height: 100%;
  & a {
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #9e279b;
  }
`;

export const ImageContainerAbout = styled.div<{ maxWidth: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 500px;
`;

export default WrapperAbout;
