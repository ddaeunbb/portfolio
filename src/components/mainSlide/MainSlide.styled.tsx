import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const TextSlide = styled.h1`
  padding-left: 9rem;

  color: white;
  font-style: italic;
  font-size: 4.5rem;
  font-family: ${Common.fonts.subFont};
  text-decoration-line: underline;
  text-underline-offset: 18px;
  -webkit-text-stroke: 3px ${Common.colors.mainColor};
  @media (max-width: 640px) {
    font-size: 3rem;
    padding-left: 1.75rem;
  }
`;
