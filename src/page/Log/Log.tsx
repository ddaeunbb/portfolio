import * as SC from './Log.styled';
import TimeBox from 'src/components/timeBox/TimeBox';

export default function Log() {
  return (
    <SC.LogContainer>
      <SC.TimeLine>
        <TimeBox
          title="코드스테이츠 부트캠프 수료"
          text="44기 FE 부트캠프 수료"
          date="2023.02~2023.08"
          length="leftlong"
        />
        <TimeBox
          direction="right"
          title="CJ ENM"
          text="Talent Management팀 인턴 근무"
          date="2022.01~2022.07"
          length="rightlong"
        />
        <TimeBox
          title="AMA PCM 대학생 광고공모전"
          text="AMA PCM 제 1회 광고공모전 장려상 수상"
          date="2021.10"
        />
        <TimeBox
          direction="right"
          title="CJ Foodvile"
          text="외식본부 HRD 인턴 근무"
          date="2021.09~2021.12"
          length="rightlong"
        />
        <TimeBox
          title="KPR 대학생 PR 아이디어 공모전"
          text=" 제18회 KPR PR 아이디어 공모전 우수상 수상"
          date="2021.02"
        />
        <TimeBox
          direction="right"
          title="KOSAC 대학생 광고공모전"
          text="2020 전국지역 은상"
          sub="2020 서울지역 최우수상"
          date="2020.11"
        />
        <TimeBox
          title="BAMP"
          text="공모전 연합동아리 / 기획팀장"
          date="2020.09~2021.06"
          length="leftlong"
        />
        <TimeBox
          direction="right"
          title="청정원 HRM 신제품 개발공모전"
          text="2020 대상 수상"
          date="2020.06"
        />
        <TimeBox
          title={`PR's`}
          text="PR 및 마케팅 연합동아리 / 부회장 / 대외협력팀"
          date="2019.06~2020.06"
          length="leftlong"
        />
      </SC.TimeLine>
    </SC.LogContainer>
  );
}
