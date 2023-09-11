import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const IntroContainer = styled.section`
  width: 100vw;
  height: 100vh;

  background-color: rgb(218 216 254 / 70%);
`;

export const SqaureBox = styled.div`
  display: flex;
  width: 80%;
  height: 70%;

  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);

  @media (max-width: 640px) {
    width: 90%;
    height: 80%;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ProfileBox = styled.div`
  position: relative;
`;

export const ProfileEffect = styled.div`
  position: absolute;
  top: 0;
  left: -10px;
  z-index: 20;
`;

export const ProfileOverlay = styled.div`
  display: flex;
  position: absolute;
  z-index: 10;
  width: 11rem;
  height: 11rem;

  background-color: rgb(24 24 27 / 70%);

  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 9999px;
  opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    opacity: 1;
  }
`;

export const Profile = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 9999px;

  background-color: ${Common.colors.subColor};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  object-fit: cover;
`;

export const Detail = styled.ul`
  display: flex;
  width: 24rem;
  height: 15rem;
  border-radius: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Content = styled.article`
  display: flex;
  width: 600px;
  margin-top: 1.25rem;
  flex-direction: column;
  gap: 0.25rem;
  @media (max-width: 640px) {
    width: 90%;
  }
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};

  color: ${Common.colors.zinc700};
  font-size: 1.25rem;
  line-height: 1.75rem;
  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;

export const Text = styled.p`
  color: ${Common.colors.zinc700};
  font-weight: 900;
  font-size: 1rem;
  line-height: 2.25rem;
  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 1rem;
    word-wrap: break-word;
    line-height: 1.25rem;
  }
`;

export const MotionCss = css`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
