import TopbarModalProvider from "../context/topbar-modal-provider";
import Layout from "../components/layout/layout";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <TopbarModalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TopbarModalProvider>
  );
}
