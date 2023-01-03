import { useEffect, useState } from "react";
import { NextPage, GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Course as CourseType, Response } from "@/types";

import { Courses } from "@/components/Course";
import { ApiService } from "@/api/apiServices";
import HeaderSearch from "./styled-search";

type CoursesResponce = Response<CourseType[]>;
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiService = new ApiService();
  const q = (context?.query?.q as string) || null;

  if (!q) {
    return {
      props: {
        courses: [],
      },
    };
  }

  const { data, error }: CoursesResponce = await apiService.searchProduct(q);

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
      courses: data,
    },
  };
};

const headerRender = (q: string, courses?: CourseType[], error?: string) => {
  if (error) {
    return error;
  }
  return courses && Boolean(courses.length)
    ? `Search results for "${q}"`
    : `No results for "${q}"... 😞`;
};

const Search: NextPage<{ courses: CourseType[]; error?: string }> = ({
  courses: ssrCourses,
  error: ssrError,
}) => {
  const router = useRouter();
  const { q } = router.query;
  const apiService = new ApiService();
  const [courses, setCourses] = useState<CourseType[] | undefined>(ssrCourses);
  const [error, setError] = useState<string | undefined>(ssrError);

  useEffect(() => {
    async () => {
      const { data, error }: CoursesResponce = await apiService.searchProduct(
        String(q)
      );

      const status = error?.status;

      if (status && (status < 200 || status >= 300)) {
        setError(error.message);
      }
      setCourses(data);
    };
  }, [q]);

  return (
    <>
      <HeaderSearch>{headerRender(q as string, courses, error)}</HeaderSearch>
      {courses && <Courses courses={courses} strapi_url={String(strapi_url)} />}
    </>
  );
};

export default Search;
