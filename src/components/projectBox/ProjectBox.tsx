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
    <Link to={link} className="w-screen flex justify-center">
      <SC.ProjectBox>
        <SC.TextWrap>
          <SC.Title>{title}</SC.Title>
          <SC.TitleShadow style={{ WebkitTextStroke: '1px #463ED8' }}>
            {title}
          </SC.TitleShadow>
          <SC.Date>○ {date}</SC.Date>
          <SC.Intro>{intro}</SC.Intro>
        </SC.TextWrap>

        <SC.ThumbnailWrap>
          <SC.ProjectWebp srcSet={thumbnail[0]} type="image/webp" />
          <SC.ProjectImg src={thumbnail[1]} alt="썸네일" />
        </SC.ThumbnailWrap>
      </SC.ProjectBox>
    </Link>
  );
}
