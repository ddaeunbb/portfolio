import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const IntroContainer = styled.section`
  padding-top: 4rem;
  width: 100vw;
  height: 100vh;
  background-color: rgb(218 216 254 / 0.7);
`;

export const SqaureBox = styled.div`
  width: 80%;
  height: 75%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const ProfileBox = styled.div`
  position: relative;
`;

export const ProfileEffect = styled.div`
  position: absolute;
  z-index: 20;
  top: 0;
  left: -10px;
`;

export const ProfileOverlay = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 9999px;
  width: 11rem;
  height: 11rem;
  background-color: rgb(24 24 27 / 0.7);
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: white;
  opacity: 0;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
  }
`;

export const Profile = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 9999px;
  background-color: ${Common.colors.subColor};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  object-fit: cover;
`;

export const Detail = styled.ul`
  width: 24rem;
  height: 15rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Content = styled.article`
  width: 600px;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  color: ${Common.colors.zinc700};
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 900;
  line-height: 2.25rem;
  color: ${Common.colors.zinc700};
`;

export const MotionCss = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
