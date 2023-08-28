import tw from 'tailwind-styled-components';

export const Prologue = tw.article`
  w-[900px]
  h-32
  rounded-3xl
  border
  border-4
  border-deeppurple/70
  bg-white
  shadow-lg
  relative
  pt-8
  px-10
`;

export const TitleShadow = tw.h1`
  font-bold
  text-3xl
  text-deeppurple
  px-3
  absolute
  top-[-19px]
  left-7
`;

export const Title = tw.h1`
  absolute
  font-bold
  left-9
  top-[-22px]
  text-3xl
  text-white
`;

export const TextWrap = tw.div`
  flex
  flex-col
  gap-1
`;

export const Text = tw.p`
  text-lg
  font-black
`;
