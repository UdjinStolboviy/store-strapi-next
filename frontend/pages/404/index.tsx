import Link from "next/link";

import { Logo } from "@/components/Logo";
import Wrapper404, { CustomLink404 } from "./styled-404";

export default function Custom404() {
  return (
    <Wrapper404>
      <Logo>404 - Page Not Found</Logo>
      <Link href="/" passHref legacyBehavior>
        <CustomLink404>Go Home</CustomLink404>
      </Link>
    </Wrapper404>
  );
}
