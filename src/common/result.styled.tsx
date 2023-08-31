import tw from 'tailwind-styled-components';

export const ModalContainer = tw.div`
  fixed
  w-screen
  h-screen
  bg-zinc-600/50
  z-30
`;

export const Title = tw.h1`
  font-bold
  text-5xl
  max-sm:text-4xl
  text-deeppurple/90
  z-10
`;

export const TitleShadow = tw.h1`
  absolute
  left-[170px]
  font-bold
  text-5xl
  max-sm:text-4xl
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
  py-20
  m-auto
  gap-12
`;

export const Wrap = tw.section`
  p-8
  bg-white
  shadow-md
  rounded-2xl
  border-2
`;

export const VideoWrap = tw.div`
  flex
  justify-center
  shadow-md
  rounded-2xl
  overflow-hidden
  border-2
`;

export const IntroImg = tw.div`
  relative
  w-full
  h-80
  rounded-2xl
  shadow-md
  border-2
  bg-cover
  bg-center
`;

export const SemiTitle = tw.h2`
  inline-block
  px-3
  py-1
  rounded-full
  font-bold
  text-deeppurple/90
  text-base
  mb-3
  bg-lightpurple
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
  border-2
  bg-cover
  bg-center
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
  border-2
  bg-white
  flex
  justify-center
  items-center
  hover:bg-indigo-500
`;
