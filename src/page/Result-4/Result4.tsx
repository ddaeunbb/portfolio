import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as Back } from 'public/icon/back.svg';
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
            <SC.Title>BAMP - Site</SC.Title>
            <SC.TitleShadow
              className="left-[202px] max-sm:left-[142px]"
              style={{ WebkitTextStroke: '1px black' }}>
              BAMP - Site
            </SC.TitleShadow>
          </div>

          <SC.IntroImg className="bg-[url(/portfolio/bamp/intro.png)]">
            <SC.UrlWrap>
              <a href="https://github.com/ddaeunbb/BAMP_site" target="_blank">
                <SC.UrlBtn>
                  <Github width={40} height={40} />
                </SC.UrlBtn>
              </a>
              <a href="http://bamp.or.kr/" target="_blank">
                <SC.UrlBtn>
                  <Web width={40} height={40} />
                </SC.UrlBtn>
              </a>
            </SC.UrlWrap>
          </SC.IntroImg>

          <SC.Wrap>
            <SC.SemiTitle>밤프 Beta 페이지</SC.SemiTitle>
            <SC.Paragraph>
              이전에 참여했었던 공모전 연합동아리 'BAMP'를 홍보하기 위해 베타
              페이지를 제작하였습니다. 홈페이지 제작 및 홍보를 통해 올해의
              연합동아리 10위안에 들 수 있었습니다. 추가적으로 공식 홈페이지
              제작 예정에 있습니다.
            </SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>기술스택</SC.SemiTitle>
            <div className="flex flex-wrap gap-1">
              <SC.Stack>HTML</SC.Stack>
              <SC.Stack>CSS</SC.Stack>
              <SC.Stack>SCSS</SC.Stack>
              <SC.Stack>JavaScript</SC.Stack>
            </div>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>진행기간</SC.SemiTitle>
            <SC.List>
              <li>Term: 2022.10.01 - 2023.10.17</li>
            </SC.List>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>팀</SC.SemiTitle>
            <SC.Paragraph>기획 2명 / 디자인 2명 / 프론트엔드 2명</SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>구현</SC.SemiTitle>
            <SC.List>
              <li>네브바 구현 </li>
              <li>인트로 이후 소개 페이지</li>
              <li>후원자 페이지</li>
            </SC.List>
          </SC.Wrap>

          <div>
            <SC.SemiTitle>구현 이미지</SC.SemiTitle>
            <SC.List>
              <li>메인 페이지</li>
              <SC.Preview className='bg-[url("/public/portfolio/bamp/intro.png")]' />
              <br />
              <li>채팅 섹션</li>
              <SC.Preview className='bg-[url("/public/portfolio/bamp/chat.png")]' />
              <br />
              <li>소개 페이지</li>
              <SC.Preview className='bg-[url("/public/portfolio/bamp/introduction.png")]' />
            </SC.List>
          </div>
        </SC.Container>
      </motion.div>
    </>
  );
}
