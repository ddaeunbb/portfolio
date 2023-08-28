import tw from 'tailwind-styled-components';

interface TabProp {
  selected: boolean;
}

export const Tab = tw.li<TabProp>`
  text-sm
  font-extrabold
  text-zinc-400
  px-4
  py-2
  rounded-3xl
  ${({ selected }) => selected && 'bg-lightpurple text-deeppurple'}
  hover:text-deeppurple
  hover:cursor-pointer
`;
