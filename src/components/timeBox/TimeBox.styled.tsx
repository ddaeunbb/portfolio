import tw from 'tailwind-styled-components';

export const LeftBox = tw.div`
  w-[480px]
  relative
  left-[calc(50%-480px)]
  flex
  items-center
`;

export const RightBox = tw.div`
  relative
  left-[50%]
  w-[600px]
  flex
  items-center
`;

export const Container = tw.article`
  w-[400px]
  py-4
  px-8
  bg-zinc-100
  border
  border-4
  border-deeppurple
  rounded-3xl
  shadow-md
  font-black
  text-zinc-700
`;

export const Title = tw.h1`
  font-bold
  text-xl
  text-deeppurple
  mb-1
`;

export const Line = tw.div`
  w-[60px]
  h-1
  bg-lightpurple
  rounded-full
`;

interface DirectionProp {
  direction: 'left' | 'right';
  length?: 'leftlong' | 'rightlong';
}

export const Circle = tw.div<DirectionProp>`
  w-[19px]
  h-[19px]
  rounded-full
  bg-zinc-100
  relative
  z-20
  ${prop => (prop.direction === 'left' ? 'left-[10px]' : 'right-[10px]')}
`;

export const Date = tw.span<DirectionProp>`
  flex
  absolute
  font-bold
  text-lg
  text-zinc-100
  flex
  flex-start
  ${prop => (prop.direction === 'left' ? 'right-[-20%]' : 'left-[-16%]')}
  ${prop =>
    prop.length === 'leftlong' ? 'right-[-38%]' : prop.length && 'left-[-30%]'}
`;
