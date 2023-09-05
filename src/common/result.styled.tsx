import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: (82 82 91 / 0.9);
`;

export const Title = styled.h1`
  font-family: ${Common.fonts.subFont};
  font-size: 3rem;
  line-height: 1;
  z-index: 10;
  margin: auto;
  -webkit-text-stroke: 2px ${Common.colors.mainColor};
  color: rgb(70 62 216 / 0.6);
  @media not all and (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const TitleShadow = styled.h1`
  position: absolute;
  left: 170px;
  font-family: ${Common.fonts.subFont};
  font-size: 3rem;
  line-height: 1;
  color: white;
  @media not all and (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const BackBtn = styled.button`
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1.25rem;
  left: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 5rem 0;
  gap: 3rem;
`;

export const Wrap = styled.section`
  padding: 2rem;
  background-color: white;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 1rem;
  border: 2px solid ${Common.colors.baseBorder};
`;

export const VideoWrap = styled.div`
  display: flex;
  justify-content: center;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
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
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 2px solid ${Common.colors.baseBorder};
  background-size: cover;
  background-position: center;
`;

export const SemiTitle = styled.h2`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-family: ${Common.fonts.subFont};
  background-color: ${Common.colors.subColor};
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.75rem;
  color: rgb(70 62 216 / 0.9);
`;

export const Paragraph = styled.p`
  font-weight: 900;
  color: ${Common.colors.zinc800};
`;

export const Stack = styled.span`
  font-family: ${Common.fonts.subFont};
  font-size: 13px;
  color: ${Common.colors.zinc700};
  border: 1px solid rgb(70 62 216 / 0.9);
  background-color: white;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const List = styled.ul`
  padding-left: 1.25rem;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 900;
  color: ${Common.colors.zinc800};
`;

export const PreviewWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Preview = styled.article`
  width: 100%;
  height: 24rem;
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 2px solid ${Common.colors.baseBorder};
  background-size: cover;
  background-position: center;
`;

export const UrlWrap = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-right: 0.75rem;
  position: absolute;
  right: 0;
  bottom: -25px;
`;

export const UrlBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.75rem;
  border-radius: 9999px;
  border: 2px solid ${Common.colors.baseBorder};
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #6366f1;
  }
`;
