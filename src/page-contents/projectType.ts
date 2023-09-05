export interface ProjectType {
  /**
   * 메인 타이틀을 'string'으로 입력해주세요.
   */
  mainTitle: string;
  /**
   * 프로젝트 소개 이미지를 tailwind 형식인 'string'으로 입력해주세요.
   * 예시: 'url(/portfolio/bamp/intro.png)'
   */
  introImg: string;
  /**
   * 프로젝트와 연관된 github url을 'string[]'으로 입력해주세요.
   */
  github: string[];
  /**
   * 프로젝트를 배포한 url을 'string'으로 입력해주세요.
   */
  deploy: string;
  /**
   * 프로젝트와 연관된 블로그 url을 'string'으로 입력해주세요.
   */
  blog?: string;
  /**
   * 프로젝트를 설명할 세미 타이틀을 'string'으로 입력해주세요.
   */
  semiTitle: string;
  /**
   * 프로젝트를 설명할 글을 'string'으로 입력해주세요.
   */
  semiContent: string;
  /**
   * 프로젝트에 쓰인 기술들을 'string[]' 형식으로 입력해주세요.
   */
  stacks: string[];
  /**
   * 프로젝트를 진행한 기간을 'string'으로 입력해주세요.
   * 예시 : '2023.06.28 - 2023.7.24',
   */
  terms: string;
  /**
   * 프로젝트를 리팩토링한 진행한 기간을 'string'으로 입력해주세요. (필수X)
   * 예시 : '2023.06.28 - 2023.7.24',
   */
  refactor?: string;
  /**
   * 프로젝트를 진행했던 팀형식을 입력해주세요. (필수X)
   * 예시 : '프론트엔드 3명 / 백엔드 3명',
   */
  team?: string;
  /**
   * 프로젝트에서 맡았던 역할을 적어주세요. (필수X)
   * 예시 : '프론트엔드 3명 / 백엔드 3명',
   */
  role?: string;
  /**
   * 프로젝트에서 구현했던 기능을 'string'으로 적어주세요.
   */
  features: string[];
  /**
   * 프로젝트에서 구현한 디테일을 'string[][]'으로 적어주세요.
   * 예시: [ ['구현내용',  'webp 경로', 'png 경로'] ]
   */
  imgDetails?: string[][];
  /**
   * 구현된 영상을 'string'으로 적어주세요.
   */
  videoURL?: string;
}
