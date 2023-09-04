import tw from 'tailwind-styled-components';

export const Summary = tw.summary`
  font-bold
  text-base
  text-deeppurple/70
  mb-2
`;

export const ImgWrap = tw.div`
  w-full
  h-96
  rounded-2xl
  shadow-md
  border-2
  overflow-hidden
`;

export const ImgWebp = tw.source`
  w-full
  h-full
  cursor-pointer
`;

export const Img = tw.img`
  w-full
  h-full
  cursor-pointer
`;
