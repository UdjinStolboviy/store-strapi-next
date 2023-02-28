import { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Product as ProductType, Response } from "@/types";

import { ApiService } from "@/api/apiServices";
import HeaderSearch from "./styled-search";
import { Products } from "@/components/Product/Product";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type ProductsResponce = Response<ProductType[]>;
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiService = new ApiService();
  const q = (context?.query?.q as string) || null;
  if (!q) {
    return {
      props: {
        products: [],
      },
    };
  }

  const { data, error }: ProductsResponce = await apiService.searchProduct(q);

  const status = error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      props: {
        error: error?.message,
      },
    };
  }

  return {
    props: {
      products: data,
    },
  };
};

const headerRender = (q: string, products?: ProductType[], error?: string) => {
  if (error) {
    return error;
  }
  return products && Boolean(products.length)
    ? `Search results for "${q}"`
    : `No results for "${q}"... 😞`;
};

const Search: NextPage<{ products: ProductType[]; error?: string }> = ({
  products: ssrProducts,
  error: ssrError,
}) => {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState<ProductType[] | undefined>(
    ssrProducts
  );
  const [error, setError] = useState<string | undefined>(ssrError);

  useEffect(() => {
    setProducts(ssrProducts);
    setError(ssrError);
  }, [q]);
  const dataCart = useSelector((state: RootState) => state.cart.cart);

  const filterProductsAddCart = (products: ProductType[]) => {
    const resultSort: ProductType[] = [];
    if (dataCart.length === 0) {
      return products;
    }
    products.forEach((product) => {
      const check = dataCart.find(
        (item: ProductType) => item.id === product.id
      );
      if (!check) {
        resultSort.push(product);
      }
    });
    return resultSort;
  };

  return (
    <>
      <HeaderSearch>{headerRender(q as string, products, error)}</HeaderSearch>
      {products && (
        <Products
          products={filterProductsAddCart(products)}
          strapi_url={String(strapi_url)}
        />
      )}
    </>
  );
};

export default Search;
