import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store";

import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";
import { IMeta, IPost } from "@/services/api/types";
import { ApiService } from "@/services/api/apiServices";

function MyApp({ Component, pageProps }: AppProps) {
  const [posts, setPosts] = useState<IPost[]>();
  const [meta, setMeta] = useState<IMeta>();

  const apiService = new ApiService();

  useEffect(() => {
    getProduct();
  }, []);

  console.log(posts, "posts");
  const getProduct = () => {
    apiService.getProduct().then(({ data, meta }) => {
      setPosts(data);
      setMeta(meta);
    });
  };

  return (
    <Provider store={store}>
      <Layout>
        <Component
          {...pageProps}
          posts={posts}
          //handelGetPosts={(limit: number) => getPosts(limit)}
          meta={meta}
        />
      </Layout>
    </Provider>
  );
}

export default MyApp;
