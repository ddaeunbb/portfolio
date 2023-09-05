import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const TextSlide = styled.h1`
  font-size: 4.5rem;
  font-family: ${Common.fonts.subFont};
  color: white;
  padding-left: 9rem;
  font-style: italic;
  text-decoration-line: underline;
  text-underline-offset: 18px;
  -webkit-text-stroke: 3px ${Common.colors.mainColor};
`;
