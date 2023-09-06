import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const Text = styled.h1`
  color: ${Common.colors.mainColor};
  font-size: 8rem;
  line-height: 1;

  font-family: ${Common.fonts.subFont};

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 10%))
    drop-shadow(0 1px 1px rgb(0 0 0 / 6%));

  @media not all and (width >= 768px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 6rem;
    line-height: 1;
  }

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 4.5rem;
    line-height: 1;
  }
`;

export const BackText = styled.h1`
  position: absolute;
  top: 0.25rem;
  left: 0.5rem;

  color: rgb(244 244 245 / 0%);
  font-size: 8rem;
  line-height: 1;

  font-family: ${Common.fonts.subFont};

  -webkit-text-stroke: 1px black;

  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 10%))
    drop-shadow(0 1px 1px rgb(0 0 0 / 6%));

  @media not all and (width >= 768px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 6rem;
    line-height: 1;
  }

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 4.5rem;
    line-height: 1;
  }
`;

export const MotionCss = css`
  position: relative;
`;
