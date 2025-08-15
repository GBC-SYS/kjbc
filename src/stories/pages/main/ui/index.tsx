"use client";

import { useQuery } from "@tanstack/react-query";

import { customAxios } from "@/libs/customAxios";

import { MainStyled } from "./styled";
import { PostsResponse } from "../types/posts";

interface Props {}

const isProd = process.env.NODE_ENV === "production";

const MainPage = ({}: Props) => {
  const {
    data: photosData,
    isLoading: photosLoading,
    error: photosError,
  } = useQuery({
    queryKey: [isProd ? "?action=read" : "sns"],
    queryFn: async ({ queryKey: [key] }) => {
      const response = await customAxios().get<PostsResponse>(key);
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱된 데이터를 유지
  });

  if (photosLoading) return <div>로딩중...</div>;

  if (photosError) return <div>Error: {photosError.message}</div>;

  return (
    <MainStyled>
      <p>SignOut55 TEST</p>
      {photosData?.records.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
        );
      })}
    </MainStyled>
  );
};

export default MainPage;
