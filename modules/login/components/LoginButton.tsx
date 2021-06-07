import { iconsSize, spacers } from "core/design";
import { Button } from "shared/components/Button";
import { MarkGithubIcon } from "@primer/octicons-react";
import React from "react";

const LoginButtonComponent = (
  { onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> },
  ref: React.ForwardedRef<HTMLButtonElement>
): JSX.Element => (
  <Button ref={ref} onClick={onClick}>
    <span style={{ marginRight: spacers[0] + "rem" }}>
      <MarkGithubIcon size={iconsSize.medium} />
    </span>
    Login with GitHub
  </Button>
);

export const LoginButton = React.forwardRef(LoginButtonComponent);
