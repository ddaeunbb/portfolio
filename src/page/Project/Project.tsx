import { motion } from 'framer-motion';
import ProjectBox from '../../components/projectBox/ProjectBox';
import { fadePop } from '../../variants/variants';
import * as SC from './Project.styled';

export function Component() {
  return (
    <motion.div initial="hidden" variants={fadePop} animate="visible">
      <SC.ProjectContainer>
        <SC.IntroImg>프로젝트 소개 이미지</SC.IntroImg>
        <ProjectBox
          title={'01. SharePetment'}
          date={'2023.06.28 - 2023.7.24'}
          intro={'반려동물 일상 공유 SNS 및 산책 서비스'}
          bg='bg-[url("/portfolio/sharepetment/sharepetment.png")]'
          link="/project/1"
        />
        <ProjectBox
          title={'02. Stackoverflow'}
          date={'2023.06.09 - 2023.06.27'}
          intro={'스택오버플로우 클론코딩 및 기능구현'}
          bg='bg-[url("/portfolio/stackoverflow/stackoverflow.png")]'
          link="/project/1"
        />
        <ProjectBox
          title={'03. Solo-Project'}
          date={'2023.05.26 ~ 06.02'}
          intro={'쇼핑몰 기능 구현 솔로 프로젝트'}
          bg='bg-[url("/portfolio/solo-project/soloproject.png")]'
          link="/project/1"
        />
        <ProjectBox
          title={'04. BAMP-Site'}
          date={'2022.10.01 ~ 10.17'}
          intro={'연합동아리 BAMP 소개사이트'}
          bg='bg-[url("/portfolio/bamp/bamp.png")]'
          link="/project/1"
        />
      </SC.ProjectContainer>
    </motion.div>
  );
}
