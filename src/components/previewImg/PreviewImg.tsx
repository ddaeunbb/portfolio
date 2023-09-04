import { useState } from 'react';
import * as SC from './PreviewImg.styled';
import Modal from 'src/components/modal/Modal';

interface PreviewImgProp {
  title: string;
  thumbnail: string[];
}

export default function PreviewImg({ title, thumbnail }: PreviewImgProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isOpen && (
        <Modal
          title={title}
          bg={thumbnail[0] === '' ? thumbnail[1] : thumbnail[0]}
          setter={setIsOpen}
        />
      )}
      <details open>
        <SC.Summary>{title}</SC.Summary>
        <SC.ImgWrap>
          <picture onClick={() => setIsOpen(true)}>
            <SC.ImgWebp srcSet={thumbnail[0]} type="image/webp" />
            <SC.Img src={thumbnail[1]} alt={title} />
          </picture>
        </SC.ImgWrap>
      </details>
    </>
  );
}
