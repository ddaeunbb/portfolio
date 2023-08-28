import * as SC from './SkillBox.styled';

interface SkillBoxProp {
  skill: string;
  url: string;
}

export default function SkillBox({ skill, url }: SkillBoxProp) {
  return (
    <SC.SkillBox>
      <SC.SkillOverlay>{skill}</SC.SkillOverlay>
      <SC.SkillImg className={url} />
    </SC.SkillBox>
  );
}
