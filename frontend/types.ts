export type Response<D = null> = {
  data: D;
  error?: Error;
  meta?: Meta;
};

export type Data<A = Record<string, unknown>> = {
  quantity: any;
  id: number;
  attributes: A;
};

export type Meta = {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type Error = {
  status: number;
  name: string;
  message: string;
  details: any;
};

export type ImageFormats = {
  name: string;
  url: string;
  width: number;
  height: number;
};

export type Image = Data<
  ImageFormats & {
    formats: {
      thumbnail: ImageFormats;
      medium: ImageFormats;
      small: ImageFormats;
    };
  }
>;

export interface IAbout {
  email: string;
  logo: {
    data: Image;
  };
  phone1: string;
  phone2: string;
  description_company: string;
  address: string;
  link_instogram: string;
  link_fb: string;
}

export type Product = Data<{
  header: string;
  link: string;
  subtitle: string;
  url: string;
  description: string;
  publishedAt: string;
  cover: {
    data: Image;
  };
  slug: string;
  size: number;
  price: number;
  availableProd: number;
  price_wholesale: number;
  link_video: string;
  quantity?: number;
}>;


export type Order = Data<{
  email: string;
  orderid: string;
  address: string;
  name: string;
  phone: string;
  transaction: string;
  amount: string;
  status: string;
  text_order: string;
  date_created: string;
  products: any;
}>;
