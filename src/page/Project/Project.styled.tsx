import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 30;
  width: 100vw;
  height: 100vh;

  background-color: (82 82 91 / 0.9);
`;

export const Title = styled.h1`
  z-index: 10;
  margin: auto;

  color: rgb(70 62 216 / 60%);
  font-size: 3rem;
  line-height: 1;
  font-family: ${Common.fonts.subFont};
  -webkit-text-stroke: 2px ${Common.colors.mainColor};

  @media (max-width: 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const BackBtn = styled.button`
  display: flex;
  position: fixed;
  top: 1.25rem;
  left: 0.75rem;
  width: 3rem;
  height: 3rem;
  border: none;

  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  padding: 5rem 0;
  max-width: 700px;
  flex-direction: column;
  gap: 3rem;
`;

export const Wrap = styled.section`
  padding: 2rem;
  border: 2px solid ${Common.colors.baseBorder};

  background-color: white;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  border-radius: 1rem;
`;

export const VideoWrap = styled.div`
  display: flex;
  justify-content: center;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid ${Common.colors.baseBorder};
`;

export const IntroImg = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  border: 2px solid ${Common.colors.baseBorder};
  background-size: cover;
  background-position: center;
`;

export const SemiTitle = styled.h2`
  display: inline-block;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.75rem;

  background-color: ${Common.colors.subColor};

  color: rgb(70 62 216 / 90%);
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 9999px;
  font-family: ${Common.fonts.subFont};
`;

export const Paragraph = styled.p`
  color: ${Common.colors.zinc800};
  font-weight: 900;
  line-height: 1.75rem;
  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`;

export const Stack = styled.span`
  padding: 0.5rem 1rem;
  border: 1px solid rgb(70 62 216 / 90%);

  background-color: white;

  color: ${Common.colors.zinc700};
  font-size: 13px;
  font-family: ${Common.fonts.subFont};
  border-radius: 9999px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
`;

export const List = styled.ul`
  display: flex;
  padding-left: 1.25rem;

  color: ${Common.colors.zinc800};
  font-weight: 900;
  line-height: 1.25rem;
  list-style-type: disc;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 640px) {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const PreviewWrapMedia = css`
  @media (ma-width: 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    gap: 3rem;
  }
`;

export const Preview = styled.article`
  width: 100%;
  height: 24rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  border: 2px solid ${Common.colors.baseBorder};
  background-size: cover;
  background-position: center;
`;

export const UrlWrap = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -25px;
  margin-right: 0.75rem;
  gap: 0.25rem;
  box-sizing: border-box;
`;

export const UrlBtn = styled.button`
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.75rem;
  border: 2px solid ${Common.colors.baseBorder};

  background-color: white;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    background-color: #6366f1;
  }
`;

export const StackWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const BackCss = css`
  stroke: ${Common.colors.mainColor};
  fill: ${Common.colors.mainColor};
`;
