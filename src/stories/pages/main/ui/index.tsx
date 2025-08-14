"use client";

import { useQuery } from "@tanstack/react-query";

import { customAxios } from "@/libs/customAxios";
import { Posts } from "@/stories/pages/main/types";

import { MainStyled } from "./styled";
// import SignOut from '/public/icons/signOut.svg';

interface Props {}

const MainPage = ({}: Props) => {
  const {
    data: photosData,
    isLoading: photosLoading,
    error: photosError,
  } = useQuery({
    queryKey: ["/posts?userId=1"],
    queryFn: async ({ queryKey: [key] }) => {
      const response = await customAxios().get<Posts[]>(key);
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱된 데이터를 유지
  });

  if (photosLoading) return <div>로딩중...</div>;

  if (photosError) return <div>Error: {photosError.message}</div>;
  return (
    <MainStyled>
      <p>SignOut22 TEST</p>
      {photosData?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </MainStyled>
  );
};

export default MainPage;
