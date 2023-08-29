import { Link } from 'react-router-dom';
import { ReactComponent as Back } from 'public/icon/back.svg';
import { ReactComponent as Blog } from 'public/icon/blog.svg';
import { ReactComponent as Github } from 'public/icon/github.svg';
import { ReactComponent as Web } from 'public/icon/web.svg';
import * as SC from 'src/common/result.styled';

export function Component() {
  return (
    <SC.Container>
      <Link to="/project">
        <SC.BackBtn>
          <Back
            className="stroke-deeppurple fill-deeppurple"
            width={40}
            height={40}
          />
        </SC.BackBtn>
      </Link>
      <div className="relative flex justify-center">
        <SC.Title>Stackoverflow</SC.Title>
        <SC.TitleShadow style={{ WebkitTextStroke: '1px black' }}>
          Stackoverflow
        </SC.TitleShadow>
      </div>

      <SC.IntroImg className="bg-[url(/portfolio/stackoverflow/stackoverflow.png)]">
        <SC.UrlWrap>
          <a href="https://github.com/ddaeunbb/seb44_pre_015" target="_blank">
            <SC.UrlBtn>
              <Github width={40} height={40} />
            </SC.UrlBtn>
          </a>
          <a href="https://mz-developer-15.netlify.app/" target="_blank">
            <SC.UrlBtn>
              <Web width={40} height={40} />
            </SC.UrlBtn>
          </a>
          <a href="https://ddaeunbb.tistory.com/298/" target="_blank">
            <SC.UrlBtn>
              <Blog width={40} height={40} />
            </SC.UrlBtn>
          </a>
        </SC.UrlWrap>
      </SC.IntroImg>

      <div>
        <SC.SemiTitle>부트캠프 프리 프로젝트</SC.SemiTitle>
        <SC.Paragraph>
          메인 프로젝트를 시작하기 전, '스택오버플로우' 사이트를 클론코딩하는
          팀프로젝트를 진행하였습니다. 앞으로 메인프로젝트에서 팀으로 작업하면서
          백엔드분들과 어떻게소통해야할지, 팀원으로 어떻게 기여해야할지 고민할
          수 있는 뜻깊은 과정이었습니다.
        </SC.Paragraph>
      </div>

      <div>
        <SC.SemiTitle>기술스택</SC.SemiTitle>
        <div className="flex flex-wrap gap-1">
          <SC.Stack>React</SC.Stack>
          <SC.Stack>Vite</SC.Stack>
          <SC.Stack>JavaScript</SC.Stack>
          <SC.Stack>Redux</SC.Stack>
          <SC.Stack>Redux-Toolkit</SC.Stack>
          <SC.Stack>styled-componets</SC.Stack>
          <SC.Stack>Tailwind</SC.Stack>
        </div>
      </div>

      <div>
        <SC.SemiTitle>팀</SC.SemiTitle>
        <SC.Paragraph>프론트엔드 3명 / 백엔드 3명</SC.Paragraph>
      </div>

      <div>
        <SC.SemiTitle>담당</SC.SemiTitle>
        <SC.Paragraph>부팀장 / 프론트엔드 팀장</SC.Paragraph>
      </div>

      <div>
        <SC.SemiTitle>구현</SC.SemiTitle>
        <SC.List>
          <li>intersection obeserver를 활용한 게시물리스트 무한스크롤 구현</li>
          <li>메인 페이지 구현</li>
          <li>질문 검색 기능 구현</li>
          <li>게시물 내용 페이지 구현</li>
          <li>좋아요 기능 구현</li>
          <li>마이페이지 구현</li>
          <li>게시물 댓글 CRUD 구현</li>
          <li>Netlify를 활용한 배포</li>
        </SC.List>
      </div>

      <div>
        <SC.SemiTitle>구현 이미지</SC.SemiTitle>
        <SC.List>
          <li>메인 페이지 (무한스크롤)</li>
          <SC.Preview className='bg-[url("/public/portfolio/stackoverflow/stackoverflow.png")]' />
          <br />
          <li>검색 키워드 입력 시, 검색 페이지</li>
          <SC.Preview className='bg-[url("/public/portfolio/stackoverflow/검색기능.png")]' />
          <br />
          <li>게시물 디테일 페이지 (좋아요 기능, 댓글 CRUD)</li>
          <SC.Preview className='bg-[url("/public/portfolio/stackoverflow/질문작성페이지.png")]' />
          <br />
          <li>게시물 디테일 페이지 (좋아요 기능, 댓글 CRUD)</li>
          <SC.Preview className='bg-[url("/public/portfolio/stackoverflow/질문페이지.png")]' />
          <br />
          <li>마이페이지 (Google Oauth)</li>
          <SC.Preview className='bg-[url("/public/portfolio/stackoverflow/마이페이지.png")]' />
        </SC.List>
      </div>
    </SC.Container>
  );
}
