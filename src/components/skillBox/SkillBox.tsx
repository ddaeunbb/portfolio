import * as SC from './SkillBox.styled';

interface SkillBoxProp {
  skill: string;
  url: string[];
}

export default function SkillBox({ skill, url }: SkillBoxProp) {
  return (
    <SC.SkillBox>
      <SC.SkillOverlay>{skill}</SC.SkillOverlay>
      <picture>
        <SC.SkillWebp srcSet={url[0]} type="image/webp" />
        <SC.SkillImg src={url[1]} alt={skill} />
      </picture>
    </SC.SkillBox>
  );
}
