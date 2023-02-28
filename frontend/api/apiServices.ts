import { Order } from './../types';


import {
    IPosts,
    IGetPost,
    IGetVacancies,
    IGetFeedbacks,
    IQuery,
    IGetInstagramPosts,
    IAbouts,
    IOrder,
} from "./types";
import qs from "qs";
import { IAbout, Product as ProductType, Response, Order as OrderType } from "@/types";


import { Any } from "@react-spring/types";

type ProductsResponce = Response<ProductType[]>;
type OrdersResponce = Response<OrderType[]>;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL
const AAHv2b = "5871846479:AAHv2bidoQhKbpNXzF11O-gzBkTnRKe-Ud4"
const chat_id = ''

type FetchMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

interface IFetchHeaders {
    [key: string]: string;
}

const fetchWithTimeout = (
    url: RequestInfo,
    options: RequestInit,
    timeout: number
): Promise<any> => {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(console.log('Erorr', url, options)), timeout)
        ),
    ]);
};

export class ApiService {
    public getProductsID(id: string): Promise<any> {
        return this.makeRequest<any>(
            `${api_url}/products/${id}?populate=*`,
            "GET"
        );
    }
    public getProducts(): Promise<any> {
        return this.makeRequest<any>(
            `${api_url}/products?populate=*`,
            "GET"
        );
    }

    public getProduct(): Promise<any> {
        return this.makeRequest<IPosts>(`${api_url}/products?populate=*`,
            "GET",
        );
    }

    public getAbout(): Promise<any> {
        return this.makeRequest<IAbouts>(`${api_url}/abouts?populate=*`,
            "GET",
        );
    }
    public sendNotification(details: any): Promise<any> {
        console.log('details', details)
        return this.makeRequest<any>(
            `https://api.telegram.org/bot${AAHv2b}/sendMessage`,
            "POST",
            details,
        );
    }

    public setOrder(body: IOrder): Promise<any> {
        return this.makeRequest<any>(`${api_url}/orders`,
            "POST",
            {
                data: body
            }
        );
    }

    public getOrder(): Promise<any> {
        return this.makeRequest<any>(
            `${api_url}/orders?populate=*`,
            "GET",
        );
    }



    public async searchProduct(q: string): Promise<ProductsResponce> {

        const query = qs.stringify(
            {
                populate: "*",
                filters: {
                    $or: [
                        {
                            header: {
                                $containsi: q,
                            },
                        },
                        {
                            subtitle: {
                                $containsi: q,
                            },
                        },
                        {
                            description: {
                                $containsi: q,
                            },
                        },
                    ],
                },
            },
            {
                encodeValuesOnly: true,
            }
        );



        const res = await fetch(`${api_url}/products?${query}`, {
            method: "GET",
            // // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },

        });

        if (res.statusText === 'OK') {
            const result: ProductsResponce = res && await res.json();

            return result;
        } else {
            return {} as ProductsResponce
        }


    }

    public async searchOrder(myemail: string): Promise<OrdersResponce> {

        const query = qs.stringify(
            {
                populate: "*",
                filters: {
                    $or: [
                        {
                            email: {
                                $containsi: myemail,
                            },
                        },
                    ],
                },
            },
            {
                encodeValuesOnly: true,
            }
        );

        const res = await fetch(`${api_url}/orders?${query}`, {
            method: "GET",
            // // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },

        });

        if (res.statusText === 'OK') {
            const result: OrdersResponce = res && await res.json();

            return result;
        } else {
            return {} as OrdersResponce
        }
    }


    private async makeRequest<TResponse>(
        url: string,
        method?: FetchMethod,
        requestBody?: object | FormData,
        headerOptions?: object
    ): Promise<TResponse> {
        const body = !(requestBody instanceof FormData)
            ? JSON.stringify(requestBody)
            : requestBody;
        const requestHeaders = headerOptions || {};

        const headers: IFetchHeaders = {
            accept: "application/json",
            ...requestHeaders,
        };

        if (!(requestBody instanceof FormData)) {
            headers["Content-Type"] = "application/json";
        }

        const response = await fetchWithTimeout(
            url,
            {
                method,
                headers,
                body,
            },
            15000
        );

        if (response.ok) {
            const resJson = await response.json();
            return resJson;
        } else {
            console.log("response", response);
            throw await response;
        }
    }
}


  // const getBotUpdates = () =>
  //   fetch("https://api.telegram.org/bot{token}/getUpdates").then((response) =>
  //     response.json()
  //   );

  // const getUserTelegramId = async (uniqueString: string) => {
  //   const { result } = await getBotUpdates();

  //   const messageUpdates = result.filter(
  //     ({ message }: any) => message?.text !== undefined
  //   );

  //   const userUpdate = messageUpdates.find(
  //     ({ message }: any) => message.text === `/start ${uniqueString}`
  //   );

  //   return userUpdate.message.from.id;
  // };

      // public createLoginRequest = (
    //     jwt: string | null,
    //     loginData: LoginData | undefined
    // ) => {
    //     if (jwt && !loginData) {
    //         return fetch(`${api_url}/users/me`, {
    //             method: "GET",
    //             headers: {
    //                 Authorization: `Bearer ${jwt}`,
    //             },
    //         });
    //     }
    //     if (loginData) {
    //         return fetch(`${api_url}/auth/local`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(loginData),
    //         });
    //     }
    //     throw { error: "Invalid login request" };
    // };
