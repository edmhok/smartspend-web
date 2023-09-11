import type { AppProps } from "next/app";

import Layout from "../components/layout/Layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import "../styles/layout.css";
// import { SWRConfig } from "swr";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        // <SWRConfig>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        // </SWRConfig>
    );
}

export default MyApp;
