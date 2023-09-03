import { ProjectType } from 'src/page-contens/projectType';

export const Project1: ProjectType = {
  mainTitle: 'SharePetment',
  introImg: 'bg-[url(/portfolio/sharepetment/sharepetment2.webp)]',
  github: ['https://github.com/SharePetment/SharePetment'],
  deploy: 'https://sharepetment.site/home',
  blog: 'https://ddaeunbb.tistory.com/305',
  semiTitle: '부트캠프 메인 프로젝트',
  semiContent:
    '실제로 동물들 사진들만 모여있는 SNS에 대한 니즈가 있다는 것을 파악하여 기존에 있는 SNS말고, 반려동물을 키우는 사람들 사이에서 사용할 수 있는 SNS를 기획하였습니다. 키우고 있는 동물을 사진을 보고 좋아요를 누를 수 있고 강아지, 고양이 제외하고도 다른 귀여운 동물들 포스팅하고 공유할 수 있습니다.',
  stacks: [
    'React',
    'Vite',
    'TypeScript',
    'React-Query',
    'React Hook Form',
    'styled-componets',
    'Tailwind',
    'ESLINT',
    'Prettier',
    'Husky',
  ],
  terms: '2023.06.28 - 2023.7.24',
  refactor: '2023.08.11 - 2023.09.03',
  team: '프론트엔드 3명 / 백엔드 3명',
  role: '부팀장 / 프론트엔드 팀장',
  features: [
    'swiper 라이브러리를 활용해 게시물 CRUD, 이미지 미리보기 구현',
    '좋아요 기능, 댓글 CRUD 기능 구현',
    'React-Query를 활용한 무한스크롤 구현',
    '공유 기능 구현',
    'atomic design system 기반의 컴포넌트 구현',
    '반응형 디자인 구현',
    'netlify의 proxy를 활용한 CORS 해결',
  ],
  imgDetails: [
    [
      'swiper 라이브러리를 활용해 게시물 CRUD, 이미지 미리보기 구현',
      '',
      '/public/portfolio/sharepetment/피드올리기.gif',
    ],
    [
      '좋아요 기능, 댓글 CRUD 기능 구현',
      '',
      '/public/portfolio/sharepetment/피드좋아요댓글구독.gif',
    ],
    [
      'React-Query를 활용한 무한스크롤 구현',
      '',
      '/public/portfolio/sharepetment/피드불러오기.gif',
    ],
    ['공유 기능 구현', '', '/public/portfolio/sharepetment/게시물공유.gif'],
  ],
};
