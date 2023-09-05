import SkillBox from '../../components/skillBox/SkillBox';
import * as SC from './Skills.styled';

export default function Skills() {
  return (
    <SC.SkillsContainer>
      <SC.TitleWrap>
        <SC.Title>Skills</SC.Title>
        <SC.TitleShadow>Skills</SC.TitleShadow>
      </SC.TitleWrap>
      <SC.SkillWrap>
        <SkillBox
          skill="HTML"
          url={['/skills/HTML.webp', '/skills/HTML.png']}
        />
        <SkillBox skill="CSS" url={['/skills/CSS3.webp', '/skills/CSS3.png']} />
        <SkillBox
          skill="JavaScript"
          url={['/skills/javascript.webp', '/skills/javascript.png']}
        />
        <SkillBox
          skill="TypeScript"
          url={['/skills/typescript.webp', '/skills/typescript.png']}
        />
        <SkillBox
          skill="React"
          url={['/skills/react.webp', '/skills/react.png']}
        />
        <SkillBox
          skill="Redux"
          url={['/skills/redux.webp', '/skills/redux.png']}
        />
        <SkillBox
          skill="React-Query"
          url={['/skills/react-query.webp', '/skills/react-query.png']}
        />
        <SkillBox
          skill="ESLINT"
          url={['/skills/eslint.webp', '/skills/eslint.png']}
        />
        <SkillBox
          skill="Prettier"
          url={['/skills/prettier.webp', '/skills/prettier.png']}
        />
        <SkillBox
          skill="Husky"
          url={['/skills/husky.webp', '/skills/husky.png']}
        />
        <SkillBox
          skill="Emotion"
          url={['/skills/emotion.webp', '/skills/emotion.png']}
        />
        <SkillBox
          skill="styled components"
          url={[
            '/skills/styled-components.webp',
            '/skills/styled-components.png',
          ]}
        />
        <SkillBox
          skill="Tailiwnd"
          url={['/skills/tailwind.webp', '/skills/tailwind.png']}
        />
      </SC.SkillWrap>

      <SC.TitleWrap>
        <SC.Title>Etc</SC.Title>
        <SC.TitleShadow>Etc</SC.TitleShadow>
      </SC.TitleWrap>

      <SC.SkillWrap>
        <SkillBox
          skill="PowerPoint"
          url={['/skills/powerpoint.webp', '/skills/powerpoint.png']}
        />
        <SkillBox
          skill="PhotoShop"
          url={['/skills/photoshop.webp', '/skills/photoshop.png']}
        />
        <SkillBox
          skill="Adobe Xd"
          url={['/skills/adobexd.webp', '/skills/adobexd.png']}
        />
        <SkillBox
          skill="Premier Pro"
          url={['/skills/premier.webp', '/skills/premier.png']}
        />
      </SC.SkillWrap>
    </SC.SkillsContainer>
  );
}
