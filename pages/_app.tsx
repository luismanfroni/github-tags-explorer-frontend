import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppThemeProvider } from "core/design/ThemeProvider";
import Root from "shared/components/Root";
import { getAuthorization } from "core/authorization";
import { Loading } from "shared/components/Loading";
import "../styles/globals.css";

function GithubTagsExplorer({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [isUrlAuth, setUrlAuth] = useState(false);
  useEffect(() => {
    const auth = getAuthorization();
    const isUrlRestricted = !["/login", "/auth"].some((path) => router.pathname.startsWith(path));
    const isUrlAuthorized: boolean = !!auth || !isUrlRestricted;
    setUrlAuth(isUrlAuthorized);
    if (!isUrlAuthorized) router.push("/login");
  });
  return (
    <>
      <Head>
        <title>GitHub Tags Explorer</title>
      </Head>
      <AppThemeProvider>
        <div id="modal"></div>
        <Root>
          {!isUrlAuth && <Loading />}
          {isUrlAuth && <Component {...pageProps} />}
        </Root>
      </AppThemeProvider>
    </>
  );
}

export default GithubTagsExplorer;
