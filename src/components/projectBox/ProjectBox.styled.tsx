import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ProjectBox = styled.section`
  display: flex;
  width: 90%;
  height: 11rem;
  padding: 1.25rem;
  border: 1px solid ${Common.colors.baseBorder};

  background-color: white;
  max-width: 700px;
  border-radius: 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 10%),
    0 4px 6px -4px rgb(0 0 0 / 10%);
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    background-color: ${Common.colors.subColor};
    filter: brightness(0.95);
  }

  &:active {
    /* stylelint-disable-next-line declaration-empty-line-before */
    transform: scale(0.96);
  }
`;

export const TextWrap = styled.article`
  display: flex;
  position: relative;
  width: 70%;
  height: 100%;
  padding-left: 1.25rem;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    padding-left: 0.5rem;
  }
`;

export const Title = styled.h1`
  z-index: 10;
  margin-bottom: 0.75rem;

  color: rgb(70 62 216 / 90%);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-family: ${Common.fonts.subFont};

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 1.2rem;
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

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    top: 28px;
    left: 12px;

    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

export const Date = styled.span`
  color: ${Common.colors.zinc400};
  font-size: 0.75rem;
`;

export const Intro = styled.span`
  padding-top: 0.25rem;

  color: ${Common.colors.zinc700};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: ${Common.fonts.subFont};

  @media not all and (width >= 640px) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    font-size: 0.3rem;
    line-height: 1rem;
  }
`;

export const ThumbnailWrap = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  border: 1px solid ${Common.colors.baseBorder};

  background-color: ${Common.colors.subColor};
  justify-content: center;
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
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const PictureCss = css`
  width: 100%;
  height: 100%;
`;
