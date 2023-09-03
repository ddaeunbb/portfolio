import tw from 'tailwind-styled-components';

interface BodyProp {
  isproject: 'true' | 'false';
}

export const Body = tw.div<BodyProp>`
  bg-[url('/background/pattern.png')]
  bg-20%
  bg-fixed
  ${props =>
    props.isproject === 'true' && `bg-[url('/background/grid.png')] bg-contain`}
`;
