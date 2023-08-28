import SkillBox from '../../components/skillBox/SkillBox';
import * as SC from './Skills.styled';

export default function Skills() {
  return (
    <SC.SkillsContainer>
      <SC.Title
        className="left-32 top-32"
        style={{ WebkitTextStroke: '3px #463ED8' }}>
        Skills
      </SC.Title>
      <SC.Underline className="left-32 top-48" />
      <SC.SkillWrap>
        <SkillBox skill="HTML" url='bg-[url("/skills/HTML.png")]' />
        <SkillBox skill="CSS" url='bg-[url("/skills/CSS3.png")]' />
        <SkillBox skill="JavaScript" url='bg-[url("/skills/javascript.png")]' />
        <SkillBox skill="TypeScript" url='bg-[url("/skills/typescript.png")]' />
        <SkillBox skill="React" url='bg-[url("/react.png")]' />
        <SkillBox skill="Redux" url='bg-[url("/skills/redux.png")]' />
        <SkillBox
          skill="React-Query"
          url='bg-[url("/skills/react-query.png")]'
        />
        <SkillBox skill="ESLINT" url='bg-[url("/skills/eslint.png")]' />
        <SkillBox skill="Prettier" url='bg-[url("/skills/prettier.png")]' />
        <SkillBox skill="Husky" url='bg-[url("/skills/husky.png")]' />
        <SkillBox skill="Emotion" url='bg-[url("/skills/emotion.png")]' />
        <SkillBox
          skill="styled components"
          url='bg-[url("/skills/styled-components.png")]'
        />
        <SkillBox skill="Tailwind" url='bg-[url("/skills/tailwind.png")]' />
      </SC.SkillWrap>

      <SC.Title
        className="left-32 bottom-24"
        style={{ WebkitTextStroke: '3px #463ED8' }}>
        Etc
      </SC.Title>
      <SC.Underline className="left-32 bottom-20" />
      <SC.SkillWrap>
        <SkillBox skill="PowerPoint" url='bg-[url("/skills/powerpoint.png")]' />
        <SkillBox skill="PhotoShop" url='bg-[url("/skills/photoshop.png")]' />
        <SkillBox skill="Adobe Xd" url='bg-[url("/skills/adobexd.png")]' />
        <SkillBox skill="Premier Pro" url='bg-[url("/skills/premier.png")]' />
      </SC.SkillWrap>
    </SC.SkillsContainer>
  );
}
