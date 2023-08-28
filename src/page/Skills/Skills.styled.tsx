import tw from 'tailwind-styled-components';

export const SkillsContainer = tw.section`
  relative
  pt-16
  w-screen
  h-screen
  bg-deeppurple/70
  flex
  flex-col
  justify-center
  items-center
`;

export const Title = tw.h1`
  font-bold
  text-6xl
  text-white
  tracking-wide
  absolute
`;

export const Underline = tw.div`
  absolute
  w-44
  h-3
  bg-white
  rounded-full
  border
  border-[3px]
  border-deeppurple
`;

export const SkillWrap = tw.div`
  w-[640px]
  flex-wrap
  flex
  gap-5
  m-auto
`;
