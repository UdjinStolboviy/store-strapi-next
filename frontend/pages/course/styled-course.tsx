import styled from "@emotion/styled";
import { StyledLink } from "@/components/StyledLink";

const ImageContainerCourse = styled.div<{ maxWidth: string }>`
  position: relative;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: 30vw;
`;

export const CustomLinkCourse = styled(StyledLink)`
  text-decoration: underline;
  font-size: 2rem;
`;

export default ImageContainerCourse;
