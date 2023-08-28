import { useCallback } from 'react';
import * as SC from './LinkList.styled';

export default function LinkList() {
  const handleMailButtonClick = useCallback(() => {
    window.location.href = 'mailto:ddaeunbb@gmail.com';
  }, []);

  return (
    <>
      <SC.LinkBox onClick={handleMailButtonClick}>
        ddaeunbb@gmail.com
      </SC.LinkBox>
      <a href="https://github.com/ddaeunbb" target="_blank" rel="noreferrer">
        <SC.LinkBox>GITHUB</SC.LinkBox>
      </a>
      <a href="https://ddaeunbb.tistory.com/" target="_blank" rel="noreferrer">
        <SC.LinkBox>BLOG</SC.LinkBox>
      </a>
      <a href="https://ddaeunbb.tistory.com/" target="_blank" rel="noreferrer">
        <SC.LinkBox>RESUME</SC.LinkBox>
      </a>
    </>
  );
}
