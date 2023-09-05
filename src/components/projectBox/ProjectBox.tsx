import { Link } from 'react-router-dom';
import * as SC from './ProjectBox.styled';
interface ProjectBoxProp {
  title: string;
  date: string;
  intro: string;
  thumbnail: string[];
  link: string;
}

export default function ProjectBox({
  title,
  date,
  intro,
  thumbnail,
  link,
}: ProjectBoxProp) {
  return (
    <Link to={link} css={SC.LinkCss}>
      <SC.ProjectBox>
        <SC.TextWrap>
          <SC.Title>{title}</SC.Title>
          <SC.TitleShadow>{title}</SC.TitleShadow>
          <SC.Date>○ {date}</SC.Date>
          <SC.Intro>{intro}</SC.Intro>
        </SC.TextWrap>

        <SC.ThumbnailWrap>
          <picture css={SC.PictureCss}>
            <SC.ProjectWebp srcSet={thumbnail[0]} type="image/webp" />
            <SC.ProjectImg src={thumbnail[1]} alt="프로젝트 썸네일" />
          </picture>
        </SC.ThumbnailWrap>
      </SC.ProjectBox>
    </Link>
  );
}
