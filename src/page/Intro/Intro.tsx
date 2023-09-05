import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import * as SC from './Intro.styled';
import LinkList from 'src/components/linkList/LinkList';
import MainSlide from 'src/components/mainSlide/MainSlide';
import { useObserver } from 'src/hooks/useObserver';
import ShiningJson from 'src/lottie/shining.json';
import { opacityVisible } from 'src/variants/variants';

export default function Intro() {
  const { ref, animation } = useObserver();
  return (
    <SC.IntroContainer>
      <motion.div
        css={SC.MotionCss}
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={opacityVisible}>
        <MainSlide />
        <SC.SqaureBox>
          <SC.InfoWrap>
            {/* 프로필 이미지 */}
            <SC.ProfileBox>
              <SC.ProfileEffect>
                <Lottie
                  loop
                  animationData={ShiningJson}
                  play
                  style={{ width: 200, height: 100 }}
                />
              </SC.ProfileEffect>
              <SC.ProfileOverlay>
                <span>김다은</span>
                <span>97.10.22</span>
                <span>Hansung Univ.</span>
              </SC.ProfileOverlay>
              <SC.Profile src="/profile/profile.webp" alt="김다은 이모지사진" />
            </SC.ProfileBox>

            {/* 페이지 링크 */}
            <SC.Detail>
              <LinkList />
            </SC.Detail>
          </SC.InfoWrap>

          <SC.Content>
            <SC.Title>
              함께 일하고 싶은 사람이 되려는 주니어 개발자입니다.
            </SC.Title>
            <SC.Text>
              프론트엔드 개발자는 사람들과 원활한 소통이 필수적인 개발자라고
              생각합니다.
              <br />
              저의 마케팅관련 수상경험과 인사팀 인턴경험은 타부서들과 원활한
              소통에 기여함을 확신합니다.
            </SC.Text>
            <SC.Title>{'어떤 사람이든, 어떤 경험이든 배울점이 있다.'}</SC.Title>
            <SC.Text>
              늘 위와 같은 자세를 갖추고 프로젝트에 임하는 사람입니다.
              <br />
              스스로에게 사람들과 소통하며 계속해서발전해 나갈 기회를
              만들어주고자 합니다.
            </SC.Text>
          </SC.Content>
        </SC.SqaureBox>
      </motion.div>
    </SC.IntroContainer>
  );
}
