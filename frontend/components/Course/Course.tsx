import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Course as CourseType } from "@/types";
import {  ProductLink, ProductStyled, Wrapper } from "./styles";

export type Props = {
  /** Header string */
  header: string;
  /** Link address */
  link: string;
  /** Image props */
  imageProps: ImageProps;
};

export const Course: FC<Props> = ({ children, header, link, imageProps }) => (
  <Link legacyBehavior href={link} passHref>
    <ProductLink>
      <ProductStyled>
        <Image {...imageProps} alt={header} />
         <h2>{header}</h2>
        {children}
      </ProductStyled>
    </ProductLink>
  </Link>
);


export const Courses: FC<{ courses: CourseType[]; strapi_url: string }> = ({
  courses,
  strapi_url,
}) => (
  <Wrapper>
    {courses?.map(
      ({
        id,
        attributes: {
          header,
          subtitle,
          publishedAt,
          cover: {
            data: {
              attributes: {
                formats: {
                  medium: { url, width, height },
                },
              },
            },
          },
        },
      }) => (
        <Course
          key={id}
          header={header}
          link={`/course/${id}`}
          imageProps={{
            width,
            height,
            alt: `Cover for ${header}`,
            src: `${strapi_url}${url}`,
          }}
        >
          <h3>{subtitle}</h3>
          <time dateTime={publishedAt}>
            {new Date(publishedAt).toDateString()}
          </time>
        </Course>
      )
    )}
  </Wrapper>
);
