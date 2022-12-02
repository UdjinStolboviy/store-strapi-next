import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store";

import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { IMeta, IPost } from "@/services/api/types";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
