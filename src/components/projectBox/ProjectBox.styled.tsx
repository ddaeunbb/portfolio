import tw from 'tailwind-styled-components';

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
  cursor-pointer
`;

export const TextWrap = tw.article`
  relative
  pl-5
  w-[70%]
  h-full
  flex
  flex-col
  justify-center
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

export const Date = tw.span`
  text-zinc-400
  text-xs
`;

export const Intro = tw.span`
  pt-1
  text-sm
  font-bold
  text-zinc-600
  max-sm:text-xs
`;

export const ProjectImg = tw.div`
  bg-lightpurple
  w-[30%]
  h-full
  bg-cover
  border
  rounded-md
`;
