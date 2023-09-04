import styled from '@emotion/styled';
import { Common } from 'src/style/common';

export const LinkBox = styled.li`
  width: 18rem;
  height: 2.25rem;
  /* tailwind bg-zinc-100 */
  background-color: #f4f4f5;
  display: flex;
  padding-left: 2rem;
  border: solid 2px #f4f4f5;
  border-radius: 9999px;
  align-items: center;
  cursor: pointer;
  font-family: ${Common.fonts.subFont};
  font-size: 0.875rem;
  color: ${Common.colors.zinc700};
  &:hover {
    background-color: ${Common.colors.mainColor};
    color: white;
    border: 2px solid ${Common.colors.mainColor};
  }
`;
