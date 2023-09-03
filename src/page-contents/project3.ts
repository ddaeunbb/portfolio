import { ProjectType } from 'src/page-contents/projectType';

const Project3: ProjectType = {
  mainTitle: 'Solo - Project',
  introImg: 'bg-[url(/portfolio/solo-project/soloproject.webp)]',
  github: [
    'https://github.com/ddaeunbb/fe-sprint-coz-shopping',
    'https://github.com/ddaeunbb/solo-shoppingmall',
  ],
  deploy: 'https://ddaeunbb-solo-project.netlify.app/',
  blog: 'https://ddaeunbb.tistory.com/276',
  semiTitle: '부트캠프 솔로 프로젝트',
  semiContent:
    '팀 프로젝트를 시작하기 이전에, 쇼핑몰 사이트를 만들어보는 솔로 프로젝트를 진행하였습니다. 완성 이후 3일정도 리팩토링을 진행하였습니다. 리팩토링은 새로운 기술을 사용해보는 것, 타입스크립트, 폴더구조, Git 브렌치 및 커밋 관리 중점으로 진행하였습니다.',
  stacks: [
    'React',
    'Vite',
    'TypeScript',
    'Redux',
    'Redux-Thunk',
    'Redux-Toolkit',
    'styled-componets',
    'Tailwind',
  ],
  terms: '2023.05.26 ~ 06.02',
  refactor: '2023.06.07 ~ 06.09',
  features: [
    'intersection obeserver를 활용한 게시물리스트 무한스크롤 구현',
    'useLayoutEffect를 활용한 라이트 모드, 다크 모드 구현',
    '알림 토스트 구현',
    'Redux-Thunk를 활용해 store에 데이터 저장',
    'atomic design system 기반의 컴포넌트 구현',
    '북마크 기능 구현',
  ],
  videoURL:
    'https://user-images.githubusercontent.com/82816029/243924008-78ce4c37-dcba-4fc5-95e4-c9e9f5c6d380.mp4',
};

export default Project3;
