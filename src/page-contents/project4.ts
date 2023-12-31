import { ProjectType } from 'src/page-contents/projectType';

const Project4: ProjectType = {
  mainTitle: 'BAMP - Site',
  introImg: 'url(/portfolio/bamp/intro.png)',
  github: ['https://github.com/ddaeunbb/BAMP_site'],
  deploy: 'http://bamp.or.kr/',
  semiTitle: '밤프 Beta 페이지',
  semiContent:
    "이전에 참여했었던 공모전 연합동아리 'BAMP'를 홍보하기 위해 베타 페이지를 제작하였습니다. 홈페이지 제작 및 홍보를 통해 올해의 연합동아리 10위안에 들 수 있었습니다. 추가적으로 공식 홈페이지 제작 예정에 있습니다.",
  stacks: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
  terms: '2022.10.01 - 2023.10.17',
  team: '기획 2명 / 디자인 2명 / 프론트엔드 2명',
  role: '프론트엔드 팀원',
  features: ['네브바 구현', '인트로 이후 소개 페이지', '후원자 페이지'],
  imgDetails: [
    ['메인페이지', '/portfolio/bamp/intro.webp', '/portfolio/bamp/intro.png'],
    ['채팅 섹션', '/portfolio/bamp/chat.webp', '/portfolio/bamp/chat.png'],
    [
      '소개페이지',
      '/portfolio/bamp/introduction.webp',
      '/portfolio/bamp/introduction.png',
    ],
  ],
};

export default Project4;
