import styled from "@emotion/styled";
import { StyledLink } from "@/components/StyledLink";

const ImageContainerProduct = styled.div<{ maxWidth: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 30vw;
`;

export const CustomLinkProduct = styled(StyledLink)`
  text-decoration: underline;
  font-size: 2rem;
`;

export default ImageContainerProduct;
