import tw from 'tailwind-styled-components';

export const Title = tw.h1`
  font-bold
  text-5xl
  text-deeppurple/90
  z-10
`;

export const TitleShadow = tw.h1`
  absolute
  left-[170px]
  font-bold
  text-5xl
  text-white
`;

export const BackBtn = tw.button`
  w-12
  h-12
  fixed
  top-5
  left-3
  flex
  justify-center
  items-center
`;

export const Container = tw.div`
  w-[90%]
  max-w-[700px]
  flex
  flex-col
  py-10
  m-auto
  gap-12
`;

export const IntroImg = tw.div`
  relative
  w-full
  h-80
  rounded-2xl
  shadow-md
  border
  bg-cover
`;

export const SemiTitle = tw.h2`
  font-bold
  text-deeppurple/90
  text-lg
  mb-2
`;

export const Paragraph = tw.p`
  font-black
  text-zinc-800
`;

export const Stack = tw.span`
  font-bold
  text-[13px]
  text-zinc-700
  border
  border-deeppurple/90
  bg-white
  rounded-full
  px-4
  py-1
  shadow-md
`;

export const List = tw.ul`
  pl-5
  list-disc
  flex
  flex-col
  gap-2
  font-black
  text-zinc-800
`;

export const Preview = tw.article`
  w-full
  h-96
  rounded-2xl
  shadow-md
  border
  border-2
  bg-cover
`;

export const UrlWrap = tw.div`
  flex
  gap-1
  mr-3
  absolute
  right-0
  bottom-[-25px]
`;

export const UrlBtn = tw.button`
  w-14
  h-14
  p-3
  rounded-full
  border
  border-2
  bg-white
  flex
  justify-center
  items-center
  hover:bg-indigo-500
`;
