import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import MarkdownIt from "markdown-it";

import { Course as CourseType, Response } from "@/types";
import { CenteredTile } from "@/components/Tile";
import ImageContainerCourse, { CustomLinkCourse } from "./styled-course";
import { useRouter } from "next/router";
import ErrorPage from 'next/error'
import { ApiService } from "@/services/api/apiServices";

type CourseResponce = Response<CourseType>;
type CoursesResponce = Response<CourseType[]>;

export const getStaticPaths: GetStaticPaths = async () => {
 try {
   const apiService = new ApiService();

  const res = await apiService.getCurses();

  const response: CoursesResponce =  res;

  const status = response?.error?.status;

  if (status && (status < 200 || status >= 300)) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = response.data.map(({ id }) => `/course/${id}`);

  return {
    paths,
    fallback: true,
  };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
   const apiService = new ApiService();

  const id = context?.params?.id;

  const res = await apiService.getCursesID(id as string);

  const { error, data, meta }: CourseResponce = res;

  if (error && (error?.status < 200 || error?.status >= 300)) {
    return {
      props: {
        course: {},
        meta: {},
      },
    };
  }

  const md = new MarkdownIt();

  return {
    props: {
      course: {
        ...data,
        attributes: {
          ...data.attributes,
          description: md.render(data.attributes.description),
        },
      },
      meta: meta,
    },
  };
  } catch (error) {
    return {
      props: {
        course: {},
        meta: {},
      },
    };
  }
};

const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

const CoursePage: NextPage<{
  course: CourseType;
  meta: CourseResponce["meta"];
}> = ({ course }) => {
  
   
  if (course && course?.attributes) {
    const {
      attributes: {
        header,
        link,
        description,
        publishedAt,
        cover: {
          data: {
            attributes: {
              formats: {
                large: { url, width },
              },
            },
          },
        },
      },
    } = course;
    return (
      <>
        <Head>
          <title>Course: {header}</title>
          <meta name="description" content={header} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredTile header={header}>
          <ImageContainerCourse maxWidth={`${width}px`}>
            <Image
              layout="fill"
              alt={`Cover for ${header}`}
              src={`${strapi_url}${url}`}
              objectFit="contain"
            />
          </ImageContainerCourse>
          <Link href={link} passHref legacyBehavior>
            <CustomLinkCourse>Enroll now!</CustomLinkCourse>
          </Link>
          <div
            style={{ maxWidth: width }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link href={link} passHref legacyBehavior>
            <CustomLinkCourse>Enroll now!</CustomLinkCourse>
          </Link>
          <h4>{new Date(publishedAt).toDateString()}</h4>
        </CenteredTile>
      </>
    );
  }
  return null;
};

export default CoursePage;
