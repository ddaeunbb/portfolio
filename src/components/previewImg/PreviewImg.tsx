import * as SC from './PreviewImg.styled';

interface PreviewImgProp {
  title: string;
  thumbnail: string[];
}

export default function PreviewImg({ title, thumbnail }: PreviewImgProp) {
  return (
    <details open>
      <SC.Summary>{title}</SC.Summary>
      <SC.ImgWrap>
        <picture>
          <SC.ImgWebp srcSet={thumbnail[0]} type="image/webp" />
          <SC.Img src={thumbnail[1]} alt={title} />
        </picture>
      </SC.ImgWrap>
    </details>
  );
}
