import tw from 'tailwind-styled-components';

export const ModalContainer = tw.figure`
  fixed
  w-screen
  h-screen
  bg-zinc-600/50
  z-30
  flex
  flex-col
  justify-center
  items-center
  overflow-y-hidden
  gap-5
`;

export const CloseBtn = tw.button`
  w-8
  h-8
  absolute
  right-8
  top-8
  bg-cover
  bg-[url('/public/icon/close.png')]
  hover:scale-110
  transition-all
  duration-100
`;

export const Title = tw.h1`
  font-bold
  text-4xl
  text-white
`;

export const Thumbnail = tw.div`
  mx-auto
  w-[900px]
  h-[500px]
  bg-blue-400
  bg-contain
`;
