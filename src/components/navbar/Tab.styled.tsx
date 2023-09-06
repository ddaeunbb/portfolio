import styled from '@emotion/styled';
import { Common } from 'src/styles/common';

interface TabProp {
  selected: boolean;
}

export const Tab = styled.li<TabProp>`
  padding: 0.8rem 1.25rem;

  background-color: ${({ selected }) =>
    selected && `${Common.colors.subColor}`};

  color: #a1a1aa;
  color: ${({ selected }) =>
    selected ? `${Common.colors.mainColor}` : '#a1a1aa'};
  font-weight: 600;
  font-size: 0.875rem;
  border-radius: 1.5rem;

  &:hover {
    /* stylelint-disable-next-line declaration-empty-line-before */
    color: ${Common.colors.mainColor};
    cursor: pointer;
  }
`;
