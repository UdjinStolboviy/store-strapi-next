import styled from "@emotion/styled";
import { StyledLink } from "@/components/StyledLink";

const WrapperAbout = styled.div`
  width: 90%;
  height: 700px;
`;

export const ImageContainerAbout = styled.div<{ maxWidth: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 500px;
`;

export default WrapperAbout;
