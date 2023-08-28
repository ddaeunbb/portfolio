import tw from 'tailwind-styled-components';

export const SkillBox = tw.div`
  w-28
  h-28
  rounded-3xl
  bg-zinc-100
  border-2
  shadow-lg
  flex
  justify-center
  items-center
  p-4
  relative
`;

export const SkillOverlay = tw.div`
  absolute
  w-full
  h-full
  flex
  justify-center
  items-center
  font-extrabold
  text-sm
  text-white
  bg-zinc-800
  rounded-3xl
  opacity-0
  hover:opacity-100
  transition-all
  duration-300
  ease-in-out
  text-center
`;

export const SkillImg = tw.div`
  w-full
  h-full
  bg-cover
`;
