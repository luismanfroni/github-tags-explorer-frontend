import { iconsSize, spacers } from "core/design";
import { HomeFillIcon } from "@primer/octicons-react";
import styled from "styled-components";
import Link from "next/link";
const HomeButtonWrapper = styled.div`
  // margin: ${spacers[2]}em 0;
  margin: auto 0;
`;

export const HomeButton = (): JSX.Element => (
  <HomeButtonWrapper>
    <Link href="/">
      <a>
        <HomeFillIcon size={iconsSize.xl} />
      </a>
    </Link>
  </HomeButtonWrapper>
);
