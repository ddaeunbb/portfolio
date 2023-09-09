import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const InfoContainer = styled.section`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgb(218 216 254 / 70%), rgb(70 62 216 / 40%));

  @media (max-width: 640px) {
    padding-top: 0;
  }
`;

export const Wrap = styled.div`
  position: absolute;
  top: 2.5rem;
  filter: drop-shadow(0 10px 8px rgb(0 0 0 / 4%))
    drop-shadow(0 4px 3px rgb(0 0 0 / 10%));
`;

export const MotionCss = css`
  display: flex;
  margin-top: 12rem;
  flex-direction: column;
  gap: 3.5rem;
  @media (max-width: 640px) {
    padding-top: 0;
  }
`;
