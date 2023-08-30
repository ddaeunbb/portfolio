import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from 'public/icon/back.svg';
import { ReactComponent as Blog } from 'public/icon/blog.svg';
import { ReactComponent as Github } from 'public/icon/github.svg';
import { ReactComponent as Web } from 'public/icon/web.svg';
import * as SC from 'src/common/result.styled';
import { fadePop } from 'src/variants/variants';

export function Component() {
  return (
    <>
      <Link to="/project">
        <SC.BackBtn>
          <Back
            className="stroke-deeppurple fill-deeppurple"
            width={40}
            height={40}
          />
        </SC.BackBtn>
      </Link>
      <motion.div initial="hidden" variants={fadePop} animate="visible">
        <SC.Container>
          <div className="relative flex justify-center">
            <SC.Title>Solo - Project</SC.Title>
            <SC.TitleShadow
              className="left-[180px] max-sm:left-[125px]"
              style={{ WebkitTextStroke: '1px black' }}>
              Solo - Project
            </SC.TitleShadow>
          </div>

          <SC.IntroImg className="bg-[url(/portfolio/solo-project/soloproject.png)]">
            <SC.UrlWrap>
              <a
                href="https://github.com/ddaeunbb/fe-sprint-coz-shopping"
                target="_blank">
                <SC.UrlBtn>
                  <Github width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a
                href="https://github.com/ddaeunbb/solo-shoppingmall"
                target="_blank">
                <SC.UrlBtn>
                  <Github width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a
                href="https://ddaeunbb-solo-project.netlify.app/"
                target="_blank">
                <SC.UrlBtn>
                  <Web width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a href="https://ddaeunbb.tistory.com/276" target="_blank">
                <SC.UrlBtn>
                  <Blog width={40} height={40} />
                </SC.UrlBtn>
              </a>
            </SC.UrlWrap>
          </SC.IntroImg>

          <SC.Wrap>
            <SC.SemiTitle>부트캠프 솔로 프로젝트</SC.SemiTitle>
            <SC.Paragraph>
              팀 프로젝트를 시작하기 이전에, 쇼핑몰 사이트를 만들어보는 솔로
              프로젝트를 진행하였습니다. 완성 이후 3일정도 리팩토링을
              진행하였습니다. 리팩토링은 새로운 기술을 사용해보는 것,
              타입스크립트, 폴더구조, Git 브렌치 및 커밋 관리 중점으로
              진행하였습니다.
            </SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>기술스택</SC.SemiTitle>
            <div className="flex flex-wrap gap-1">
              <SC.Stack>React</SC.Stack>
              <SC.Stack>Vite</SC.Stack>
              <SC.Stack>TypeScript</SC.Stack>
              <SC.Stack>Redux</SC.Stack>
              <SC.Stack>Redux-Thunk</SC.Stack>
              <SC.Stack>Redux-Toolkit</SC.Stack>
              <SC.Stack>styled-componets</SC.Stack>
              <SC.Stack>Tailwind</SC.Stack>
            </div>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>진행기간</SC.SemiTitle>
            <SC.List>
              <li>Term: 2023.05.26 ~ 06.02</li>
              <li>Refactor: 2023.06.07 ~ 06.09</li>
            </SC.List>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>구현</SC.SemiTitle>
            <SC.List>
              <li>
                intersection obeserver를 활용한 게시물리스트 무한스크롤 구현
              </li>
              <li>useLayoutEffect활용한 라이트 모드, 다크 모드 구현</li>
              <li>알림 토스트 구현</li>
              <li>Redux-Thunk를 활용해 store에 데이터 저장</li>
              <li>북마크 기능 구현</li>
              <li>마이페이지 구현</li>
            </SC.List>
          </SC.Wrap>

          <div>
            <SC.SemiTitle>구현 영상</SC.SemiTitle>
            <SC.VideoWrap>
              <ReactPlayer
                url="https://user-images.githubusercontent.com/82816029/243924008-78ce4c37-dcba-4fc5-95e4-c9e9f5c6d380.mp4"
                playing={true}
                controls={true}
                width={'100%'}
              />
            </SC.VideoWrap>
          </div>
        </SC.Container>
      </motion.div>
    </>
  );
}
