import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const LogContainer = styled.section`
  width: 100vw;
  background: linear-gradient(rgb(70 62 216 / 0.4), rgba(70, 62, 216, 0.7));
`;

export const TimeLine = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: ${Common.colors.zinc100};
    top: 0;
    bottom: 0;
    left: calc(50% - 3px);
    margin-left: -1px;
    border-radius: 9999px;
  }
`;
