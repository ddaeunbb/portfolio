import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const MainContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(white, rgba(218 216 254 / 0.7));
`;

export const TopTitleWrap = styled.div`
  position: absolute;
  left: 5rem;
  top: 40%;
  @media not all and (min-width: 768px) {
    left: 0.75rem;
    top: 45%;
  }
`;

export const BottomTitleWrap = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 20%;
  @media not all and (min-width: 768px) {
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
  border-radius: 9999px;
  background-color: ${Common.colors.subColor};
  border: 2px solid ${Common.colors.mainColor};
  @media not all and (min-width: 768px) {
    width: 30rem;
    height: 30rem;
  }
`;
