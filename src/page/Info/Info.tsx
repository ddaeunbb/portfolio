import { motion } from 'framer-motion';
import Lottie from 'react-lottie-player';
import * as SC from './Info.styled';
import TitleBox from 'src/components/titleBox/TitleBox';
import { useObserver } from 'src/hooks/useObserver';
import CodeJson from 'src/lottie/code.json';
import { fadeUp } from 'src/variants/variants';

export default function Info() {
  const { ref, animation } = useObserver();
  return (
    <>
      <SC.InfoContainer>
        <SC.Wrap>
          <Lottie
            loop
            animationData={CodeJson}
            play
            style={{ width: 300, height: 300 }}
          />
        </SC.Wrap>

        <motion.div
          ref={ref}
          css={SC.MotionCss}
          initial="hidden"
          animate={animation}
          variants={fadeUp}>
          <TitleBox
            title="프론트엔드 개발자로 까지의 여정"
            contents={[
              '여러 공모전에서 웹앱 관련 기획서로 주로 수상을 한 경험이 있어 웹서비스 기획에 대해서 관심을 갖게 되었습니다.',
              '수상한 작품들이 실제적으로 운영되는 결과물을 볼 수 없는 것들이 아쉬워 구현을 위해 개발을 시작하게 되었습니다.',
            ]}
          />

          <TitleBox
            title="배움의 구분이 없는 프론트엔드"
            contents={[
              '공부를 위해 소속된 동아리를 위한 홈페이지를 제작하고 홍보해 올해의 연합동아리 20위안에 들 수 있었습니다.',
              '기획, 디자인 뿐만아니라 모든 과정에 참여하면서 다양한 소통을 해야하는 프론트엔드에 매력을 느끼게 되었습니다.',
            ]}
          />
        </motion.div>
      </SC.InfoContainer>
    </>
  );
}
