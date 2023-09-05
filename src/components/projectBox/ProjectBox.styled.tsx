import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ProjectBox = styled.section`
  width: 90%;
  max-width: 700px;
  height: 11rem;
  background-color: white;
  border: 1px solid ${Common.colors.baseBorder};
  border-radius: 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  transition-duration: 0.2s;
  padding: 1.25rem;
  &:hover {
    background-color: ${Common.colors.subColor};
    filter: brightness(0.95);
  }
  &:active {
    transform: scale(0.96);
  }
`;

export const TextWrap = styled.article`
  width: 70%;
  height: 100%;
  position: relative;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 1.875rem;
  line-height: 2.25rem;
  color: rgb(70 62 216 / 0.9);
  margin-bottom: 0.75rem;
  z-index: 10;
  @media not all and (min-width: 640px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const TitleShadow = styled.h1`
  position: absolute;
  top: 23px;
  left: 23px;
  font-family: ${Common.fonts.subFont};
  color: white;
  font-size: 1.875rem;
  line-height: 2.25rem;
  -webkit-text-stroke: 1px ${Common.colors.mainColor};
  @media not all and (min-width: 640px) {
    top: 25px;
    left: 22px;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Date = styled.span`
  color: ${Common.colors.zinc400};
  font-size: 0.75rem;
`;

export const Intro = styled.span`
  padding-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: ${Common.fonts.subFont};
  color: ${Common.colors.zinc700};
  @media not all and (min-width: 640px) {
    font-size: 0.75rem;
    ine-height: 1rem;
  }
`;

export const ThumbnailWrap = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${Common.colors.subColor};
  display: flex;
  justify-content: center;
  border: 1px solid ${Common.colors.baseBorder};
  border-radius: 0.375rem;
`;

export const ProjectWebp = styled.source`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const LinkCss = css`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const PictureCss = css`
  width: 100%;
  height: 100%;
`;
