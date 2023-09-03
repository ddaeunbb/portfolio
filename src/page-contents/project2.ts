import { ProjectType } from 'src/page-contents/projectType';

const Project2: ProjectType = {
  mainTitle: 'Stackoverflow',
  introImg: 'bg-[url(/portfolio/stackoverflow/stackoverflow.webp)]',
  github: ['https://github.com/ddaeunbb/seb44_pre_015'],
  deploy: 'https://mz-developer-15.netlify.app/',
  blog: 'https://ddaeunbb.tistory.com/298/',
  semiTitle: '부트캠프 프리 프로젝트',
  semiContent:
    "메인 프로젝트를 시작하기 전, '스택오버플로우' 사이트를 클론코딩하는 팀프로젝트를 진행하였습니다. 앞으로 메인프로젝트에서 팀으로 작업하면서 백엔드분들과 어떻게소통해야할지, 팀원으로 어떻게 기여해야할지 고민할 수 있는 뜻깊은 과정이었습니다",
  stacks: [
    'React',
    'Vite',
    'JavaScript',
    'Redux',
    'Redux-Toolkit',
    'styled-componets',
    'Tailwind',
  ],
  terms: '2023.06.09 - 2023.06.27',
  team: '기획 2명 / 디자인 2명 / 프론트엔드 2명',
  role: '부팀장 / 프론트엔드 팀장',
  features: [
    'intersection obeserver를 활용한 게시물리스트 무한스크롤 구현',
    '메인 페이지 구현',
    '질문 검색 기능 구현',
    '게시물 내용 페이지 구현',
    '좋아요 기능 구현',
    '마이페이지 구현',
    '게시물 댓글 CRUD 구현',
    'Netlify를 활용한 배포',
  ],
  imgDetails: [
    [
      '메인페이지 (무한스크롤)',
      '/public/portfolio/stackoverflow/stackoverflow.webp',
      '/public/portfolio/stackoverflow/stackoverflow.png',
    ],
    [
      '검색 키워드 입력 시, 검색 페이지',
      '/public/portfolio/stackoverflow/검색기능.webp',
      '/public/portfolio/stackoverflow/검색기능.png',
    ],
    [
      '게시물 디테일 페이지 (좋아요 기능, 댓글 CRUD)',
      '/public/portfolio/stackoverflow/질문작성페이지.webp',
      '/public/portfolio/stackoverflow/질문작성페이지.png',
    ],
    [
      '마이페이지 (Google Oauth)',
      '/public/portfolio/stackoverflow/마이페이지.webp',
      '/public/portfolio/stackoverflow/마이페이지.png',
    ],
  ],
};

export default Project2;
