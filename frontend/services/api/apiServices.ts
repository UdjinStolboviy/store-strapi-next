

import {
    IPosts,
    IGetPost,
    IGetVacancies,
    IGetFeedbacks,
    IQuery,
    IGetInstagramPosts,
} from "./types";
import qs from "qs";
import { Course as CourseType, Response } from "@/types";

import { Course } from "@/types";
import { Any } from "@react-spring/types";

type CoursesResponce = Response<CourseType[]>;

const api_url = process.env.NEXT_PUBLIC_STRAPI_API_URL

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
            setTimeout(() => reject(new Error("Timeout error")), timeout)
        ),
    ]);
};

export class ApiService {
    public getVacancies(): Promise<IGetVacancies> {
        return this.makeRequest<IGetVacancies>(`${api_url}/api/jobs`, "GET");
    }

    public getFeedbacks(q?: IQuery): Promise<IGetFeedbacks> {
        const defaultQuery: IQuery = {
            pagination: {
                page: 2,
                pageSize: 3,
            },
            sort: ["publishedAt:desc"],
        };
        const query = q ? qs.stringify(q) : qs.stringify(defaultQuery);
        return this.makeRequest<IGetFeedbacks>(
            `${api_url}/api/fecks?${query}`,
            "GET"
        );
    }

    public getInstagramPosts(q?: IQuery): Promise<IGetInstagramPosts> {
        return this.makeRequest<IGetInstagramPosts>(
            `${api_url}/inssts`,
            "GET"
        );
    }

    public getPost(id: string): Promise<IGetPost> {
        return this.makeRequest<IGetPost>(
            `${api_url}/posts/${id}?populate=adminior.img,mainImg`,
            "GET"
        );
    }

    public getPosts(limit: number): Promise<IPosts> {
        return this.makeRequest<IPosts>(
            `${api_url
            }/posts?populate=administrator,administrator.img,mainImpagination[limit]=${limit}`,
            "GET"
        );
    }

    public getCursesID(id: string): Promise<any> {
        return this.makeRequest<any>(
            `${api_url}/courses/${id}?populate=*`,
            "GET"
        );
    }
    public getCurses(): Promise<any> {
        return this.makeRequest<any>(
            `${api_url}/courses?populate=*`,
            "GET"
        );
    }

    public getProduct(): Promise<any> {
        return this.makeRequest<IPosts>(`${api_url}/courses?populate=*`,
            "GET",
        );
    }

    public async searchProduct(q: string): Promise<CoursesResponce> {

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

        const res = await fetch(`${api_url}/courses?${query}`, {
            method: "GET",
            // mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },

        });

        if (res.statusText === 'OK') {
            const result: CoursesResponce = res && await res.json();

            return result;
        } else {
            return {} as CoursesResponce
        }


    }

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
