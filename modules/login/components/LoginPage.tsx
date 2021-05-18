import CenteredWrapper from "shared/components/Centered";
import { LoginCard } from "./LoginCard";
import { H1, H2 } from "shared/components/Texts";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { AUTH_URL } from "core/authorization";

export default function LoginPage(): JSX.Element {
  return (
    <CenteredWrapper>
      <H1>Github Tags Explorer</H1>
      <LoginCard>
        <H2>You have to be logged in to access your GitHub Tags!</H2>
        <Link href={AUTH_URL}>
          <LoginButton />
        </Link>
      </LoginCard>
    </CenteredWrapper>
  );
}
