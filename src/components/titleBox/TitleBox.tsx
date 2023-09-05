import * as SC from './TitleBox.styled';

interface TitleBoxProp {
  title: string;
  contents: string[];
}

export default function TitleBox({ title, contents }: TitleBoxProp) {
  return (
    <SC.Prologue>
      <SC.TitleShadow>{title}</SC.TitleShadow>
      <SC.Title>{title}</SC.Title>

      <SC.TextWrap>
        {contents.map((content, idx) => (
          <SC.Text key={idx}>{content}</SC.Text>
        ))}
      </SC.TextWrap>
    </SC.Prologue>
  );
}
