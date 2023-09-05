import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InfoContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(rgb(218 216 254 / 0.7), rgba(70, 62, 216, 0.4));
`;

export const Wrap = styled.div`
  position: absolute;
  top: 2.5rem;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))
    drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
`;

export const MotionCss = css`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;
