import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const MainContainer = styled.section`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 3rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(white, rgba(218 216 254 / 70%));
`;

export const TopTitleWrap = styled.div`
  position: absolute;
  top: 40%;
  left: 5rem;

  @media not all and (width >= 768px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    top: 45%;
    left: 0.75rem;
  }
`;

export const BottomTitleWrap = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 20%;

  @media not all and (width >= 768px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    right: 0.75rem;
    bottom: 30%;
  }
`;

export const LeftBubble = css`
  position: absolute;
  left: -200px;
`;

export const RightBubble = css`
  position: absolute;
  right: -200px;
`;

export const MotionCss2 = css`
  position: absolute;
  right: 0;
  bottom: 3rem;
`;

export const MotionCss1 = css`
  width: 35rem;
  height: 35rem;
  border: 2px solid ${Common.colors.mainColor};

  background-color: ${Common.colors.subColor};
  border-radius: 9999px;

  @media not all and (width >= 768px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    width: 30rem;
    height: 30rem;
  }
`;
