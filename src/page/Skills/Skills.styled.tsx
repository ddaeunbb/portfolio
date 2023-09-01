import tw from 'tailwind-styled-components';

export const SkillsContainer = tw.section`
  pt-28
  w-screen
  h-screen
  bg-deeppurple/70
  flex
  flex-col
  justify-center
  items-center
`;

export const TitleWrap = tw.h1`
  relative
`;

export const Title = tw.h1`
  font-bold
  text-3xl
  text-deeppurple
  tracking-wide
`;

export const TitleShadow = tw.h1`
  absolute
  font-bold
  text-3xl
  text-white
  tracking-wide
  top-[1px]
  right-[4px]
`;

export const SkillWrap = tw.div`
  w-[560px]
  flex-wrap
  flex
  gap-x-5
  gap-y-3
  m-auto
`;
