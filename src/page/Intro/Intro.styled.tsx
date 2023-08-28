import tw from 'tailwind-styled-components';

export const IntroContainer = tw.section`
  pt-16
  w-screen
  h-screen
  bg-lightpurple/70
`;

export const SqaureBox = tw.div`
  w-[80%]
  h-[75%]
  bg-white
  flex
  flex-col
  justify-center
  items-center
  rounded-xl
  shadow-lg
`;

export const InfoWrap = tw.div`
  flex
  gap-3
  items-center
`;

export const ProfileBox = tw.div`
  relative
`;

export const ProfileEffect = tw.div`
  absolute
  z-20
  top-0
  left-[-10px]
`;

export const ProfileOverlay = tw.div`
  absolute
  w-44
  h-44
  bg-zinc-900/70
  z-10
  rounded-full
  flex
  flex-col
  items-center
  justify-center
  gap-3
  text-sm
  font-semibold
  text-white
  opacity-0
  duration-300
  hover:opacity-100
  ease-in-out
`;

export const Profile = tw.div`
  w-44
  h-44
  rounded-full
  bg-lightpurple
  shadow-md
  bg-cover
  bg-[url('/profile/profile.png')]
`;

export const Detail = tw.ul`
  w-96
  h-60
  rounded-3xl
  flex
  flex-col
  justify-center
  items-center
  gap-4
`;

export const Content = tw.article`
  w-[600px]
  mt-5
  flex
  flex-col
  gap-1
`;

export const Title = tw.h1`
  text-xl
  font-bold
  text-zinc-700
`;
export const Text = tw.p`
  text-base
  font-black
  leading-9
  text-zinc-700
`;
