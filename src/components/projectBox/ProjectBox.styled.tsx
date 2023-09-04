import styled from '@emotion/styled';
import tw from 'tailwind-styled-components';
import { Common } from 'src/style/common';

export const ProjectBox = tw.section`
  w-[90%]
  max-w-[700px]
  h-44
  bg-white
  border
  rounded-2xl
  shadow-lg
  hover:bg-lightpurple
  hover:brightness-95
  active:scale-[0.96]
  duration-[0.2s]
  p-5
  flex
  items-center
  cursor-pointer
`;

export const TextWrap = styled.article`
  width: 70%;
  height: 100%;
  position: relative;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = tw.h1`
  font-bold
  text-3xl
  max-sm:text-2xl
  text-deeppurple/90
  mb-3
  z-10
`;

export const TitleShadow = tw.h1`
  absolute
  top-[23px]
  left-[23px]
  max-sm:top-[25px]
  max-sm:left-[22px]
  font-bold
  text-3xl
  max-sm:text-2xl
  text-white
`;

export const Date = styled.span`
  color: ${Common.colors.zinc400};
  font-size: 0.75rem;
`;

export const Intro = tw.span`
  pt-1
  text-sm
  font-bold
  text-zinc-600
  max-sm:text-xs
`;

export const ThumbnailWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${Common.colors.subColor};
  display: flex;
  justify-content: center;
  border: 1px solid ${Common.colors.baseBorder};
  border-radius: 0.375rem;
`;

export const ProjectWebp = styled.source`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
