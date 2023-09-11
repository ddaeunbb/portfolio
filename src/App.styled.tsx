import styled from '@emotion/styled';

interface BodyProp {
  isproject: boolean;
}

export const Body = styled.div<BodyProp>`
  background-image: url('/background/pattern.png');
  background-size: 20%;
  background-attachment: fixed;
  ${props =>
    props.isproject &&
    `background-image: url('/background/grid.webp'); background-size: contain;`}
  overflow: hidden;
`;
