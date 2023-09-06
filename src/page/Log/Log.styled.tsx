import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const LogContainer = styled.section`
  width: 100vw;
  background: linear-gradient(rgb(70 62 216 / 40%), rgb(70 62 216 / 70%));
  box-sizing: border-box;
`;

export const TimeLine = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin: auto;
  padding: 1rem 2.5rem;
  box-sizing: border-box;
  flex-direction: column;
  gap: 1rem;

  &::after {
    /* stylelint-disable-next-line declaration-empty-line-before */
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 3px);
    width: 6px;
    margin-left: -1px;

    background-color: ${Common.colors.zinc100};
    content: '';
    border-radius: 9999px;
  }
`;
