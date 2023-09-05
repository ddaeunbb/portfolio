import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Logo = styled.div`
  height: 100%;
  flex-grow: 1;
`;

export const Tabs = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  flex-grow: 0;
  gap: 0.25rem;
`;

export const MotionCss = css`
  width: 100vw;
  height: 4rem;
  position: fixed;
  display: flex;
  z-index: 20;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  backdrop-filter: blur(8px);
  padding: 0 3rem;
  background-color: rgb(255 255 255 / 0.5);
  box-sizing: border-box;
  gap: 1.25rem;
`;
