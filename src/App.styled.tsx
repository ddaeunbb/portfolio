import tw from 'tailwind-styled-components';

interface BodyProp {
  isProject: boolean;
}

export const Body = tw.div<BodyProp>`
  bg-[url('/background/pattern.png')]
  bg-20%
  bg-fixed
  ${props => props.isProject && `bg-[url('/background/grid.png')] bg-contain`}
`;
