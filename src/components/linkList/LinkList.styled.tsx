import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

export const LinkBox = styled.li`
  display: flex;
  width: 18rem;
  height: 2.25rem;
  padding-left: 2rem;
  border: solid 2px #f4f4f5;

  /* tailwind bg-zinc-100 */
  background-color: #f4f4f5;

  color: ${Common.colors.zinc700};
  font-size: 0.875rem;
  border-radius: 9999px;
  align-items: center;
  cursor: pointer;
  font-family: ${Common.fonts.subFont};

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    border: 2px solid ${Common.colors.mainColor};

    background-color: ${Common.colors.mainColor};

    color: white;
  }
  @media (max-width: 640px) {
    width: 15rem;
    height: 1.75rem;
  }
`;
