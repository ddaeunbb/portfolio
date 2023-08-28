import { Link } from 'react-router-dom';
import * as SC from './ProjectBox.styled';
interface ProjectBoxProp {
  title: string;
  date: string;
  intro: string;
  bg: string;
  link: string;
}

export default function ProjectBox({
  title,
  date,
  intro,
  bg,
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
        <SC.ProjectImg className={bg} />
      </SC.ProjectBox>
    </Link>
  );
}
