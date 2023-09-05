import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Text = styled.h1`
  font-size: 8rem;
  line-height: 1;
  font-family: ${Common.fonts.subFont};
  color: ${Common.colors.mainColor};
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  @media not all and (min-width: 768px) {
    font-size: 6rem;
    line-height: 1;
  }
  @media not all and (min-width: 640px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

export const BackText = styled.h1`
  font-size: 8rem;
  line-height: 1;
  font-family: ${Common.fonts.subFont};
  color: rgb(244 244 245 / 0);
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;
  -webkit-text-stroke: 1px black;
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  @media not all and (min-width: 768px) {
    font-size: 6rem;
    line-height: 1;
  }
  @media not all and (min-width: 640px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

export const MotionCss = css`
  position: relative;
`;
