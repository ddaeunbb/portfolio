import { motion } from 'framer-motion';
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
            <SC.Title>SharePetment</SC.Title>
            <SC.TitleShadow style={{ WebkitTextStroke: '1px black' }}>
              SharePetment
            </SC.TitleShadow>
          </div>
          <SC.IntroImg className="bg-[url(/portfolio/sharepetment/sharepetment2.png)]">
            <SC.UrlWrap>
              <a
                href="https://github.com/SharePetment/SharePetment"
                target="_blank">
                <SC.UrlBtn>
                  <Github width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a href="https://sharepetment.site/home" target="_blank">
                <SC.UrlBtn>
                  <Web width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a href="https://ddaeunbb.tistory.com/305" target="_blank">
                <SC.UrlBtn>
                  <Blog width={40} height={40} />
                </SC.UrlBtn>
              </a>
            </SC.UrlWrap>
          </SC.IntroImg>

          <SC.Wrap>
            <SC.SemiTitle>부트캠프 메인 프로젝트</SC.SemiTitle>
            <SC.Paragraph>
              실제로 동물들 사진들만 모여있는 SNS에 대한 니즈가 있다는 것을
              파악하여 기존에 있는 SNS말고, 반려동물을 키우는 사람들 사이에서
              사용할 수 있는 SNS를 기획하였습니다. 키우고 있는 동물을 사진을
              보고 좋아요를 누를 수 있고 강아지, 고양이 제외하고도 다른 귀여운
              동물들 포스팅하고 공유할 수 있습니다.
            </SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>기술스택</SC.SemiTitle>
            <div className="flex flex-wrap gap-1">
              <SC.Stack>React</SC.Stack>
              <SC.Stack>Vite</SC.Stack>
              <SC.Stack>TypeScript</SC.Stack>
              <SC.Stack>React-Query</SC.Stack>
              <SC.Stack>React Hook Form</SC.Stack>
              <SC.Stack>styled-components</SC.Stack>
              <SC.Stack>Tailwind</SC.Stack>
              <SC.Stack>ESLINT</SC.Stack>
              <SC.Stack>Prettier</SC.Stack>
              <SC.Stack>Husky</SC.Stack>
            </div>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>진행기간</SC.SemiTitle>
            <SC.List>
              <li>Term: 2023.06.28 - 2023.7.24</li>
              <li>Refactor: 2023.08.11 - 2023.09.03</li>
            </SC.List>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>팀</SC.SemiTitle>
            <SC.Paragraph>프론트엔드 3명 / 백엔드 3명</SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>담당</SC.SemiTitle>
            <SC.Paragraph>부팀장 / 프론트엔드 팀장</SC.Paragraph>
          </SC.Wrap>

          <div>
            <SC.SemiTitle>구현</SC.SemiTitle>
            <SC.List>
              <li>
                swiper 라이브러리를 활용해 게시물 CRUD, 이미지 미리보기 구현
              </li>
              <SC.Preview className='bg-[url("/public/portfolio/sharepetment/피드올리기.gif")]' />
              <SC.Preview className='bg-[url("/public/portfolio/sharepetment/피드수정.gif")]' />
              <br />
              <li>좋아요 기능, 댓글 CRUD 기능 구현</li>
              <SC.Preview className='bg-[url("/public/portfolio/sharepetment/피드좋아요댓글구독.gif")]' />
              <br />
              <li>React-Query를 활용한 무한스크롤 구현</li>
              <SC.Preview className='bg-[url("/public/portfolio/sharepetment/피드불러오기.gif")]' />
              <br />
              <li>공유 기능 구현</li>
              <SC.Preview className='bg-[url("/public/portfolio/sharepetment/게시물공유.gif")]' />
              <br />
              <li>atomic design system 기반의 컴포넌트 구현</li>
              <li>반응형 디자인 구현</li>
              <li>netlify의 proxy를 활용한 CORS 해결</li>
            </SC.List>
          </div>

          <div>
            <SC.SemiTitle>이외 참여했던 기능</SC.SemiTitle>
            <SC.List>
              <li>React Hook Form을 이용한 회원가입 기능</li>
              <SC.Preview className='bg-[url("/portfolio/sharepetment/login.gif")]' />
            </SC.List>
          </div>
        </SC.Container>
      </motion.div>
    </>
  );
}
