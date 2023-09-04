import styled from '@emotion/styled';
import { Common } from 'src/style/common';

interface TabProp {
  selected: boolean;
}

export const Tab = styled.li<TabProp>`
  font-size: 0.875rem;
  font-weight: 600;
  color: #a1a1aa;
  padding: 0.8rem 1.25rem;
  border-radius: 1.5rem;
  background-color: ${({ selected }) =>
    selected && `${Common.colors.subColor}`};
  color: ${({ selected }) =>
    selected ? `${Common.colors.mainColor}` : '#a1a1aa'};
  &:hover {
    color: ${Common.colors.mainColor};
    cursor: pointer;
  }
`;
