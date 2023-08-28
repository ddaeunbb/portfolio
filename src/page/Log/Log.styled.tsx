import tw from 'tailwind-styled-components';

export const LogContainer = tw.section`
  w-screen
  py-16
  bg-gradient-to-b
  from-deeppurple/40
  to-deeppurple/70
`;

export const TimeLine = tw.div`
  relative
  w-full
  m-auto
  py-4
  after:absolute
  after:w-[6px]
  after:bg-zinc-100
  after:top-0
  after:bottom-0
  after:left-[calc(50%-3px)]
  after:ml-[-1px]
  after:rounded-full
  px-10
  flex
  flex-col
  gap-4
`;
