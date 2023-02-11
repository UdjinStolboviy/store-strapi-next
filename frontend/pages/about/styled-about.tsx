import styled from "@emotion/styled";
import { StyledLink } from "@/components/StyledLink";
import StyleGuide from "@/styles/style-guide";

const WrapperAbout = styled.div`
  width: 90%;
  min-width: 300px;
  min-height: 700px;
  height: 100%;
  & p {
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
  }
  & a {
    display: flex;
    align-items: center;
    font-size: ${StyleGuide.FontStyles.title.h5.fontSize};
    font-weight: ${StyleGuide.FontStyles.title.h5.fontWeight};
    font-style: ${StyleGuide.FontStyles.title.h5.fontStyle};
    transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  }
  & a:hover {
    color: #0a84ff;
  }
  .wrapperTelephone {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .gepTelephone {
    width: 20px;
  }
  .gepHeightAbout {
    height: 20px;
  }
`;

export const ImageContainerAbout = styled.div<{ maxWidth: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 300px;
`;

export default WrapperAbout;
