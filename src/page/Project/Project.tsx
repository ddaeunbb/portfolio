import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { useLoaderData, Link } from 'react-router-dom';
import * as SC from './Project.styled';
import { ReactComponent as Back } from 'public/icon/back.svg';
import { ReactComponent as Blog } from 'public/icon/blog.svg';
import { ReactComponent as Github } from 'public/icon/github.svg';
import { ReactComponent as Web } from 'public/icon/web.svg';
import PreviewImg from 'src/components/previewImg/PreviewImg';
import { ProjectType } from 'src/page-contents/projectType';
import { fadePop } from 'src/variants/variants';

export function Component() {
  const Project = useLoaderData() as ProjectType;

  return (
    <>
      <Link to="/project">
        <SC.BackBtn>
          <Back css={SC.BackCss} width={40} height={40} />
        </SC.BackBtn>
      </Link>
      <motion.div initial="hidden" variants={fadePop} animate="visible">
        <SC.Container>
          <SC.Title>{Project.mainTitle}</SC.Title>

          <SC.IntroImg style={{ backgroundImage: `${Project.introImg}` }}>
            <SC.UrlWrap>
              {Project.github.map((url, urlKey) => (
                <a href={url} target="_blank" key={urlKey}>
                  <SC.UrlBtn>
                    <Github width={40} height={40} />
                  </SC.UrlBtn>
                </a>
              ))}
              <a href={Project.deploy} target="_blank">
                <SC.UrlBtn>
                  <Web width={40} height={40} />
                </SC.UrlBtn>
              </a>
              {Project.blog && (
                <a href={Project.blog} target="_blank">
                  <SC.UrlBtn>
                    <Blog width={40} height={40} />
                  </SC.UrlBtn>
                </a>
              )}
            </SC.UrlWrap>
          </SC.IntroImg>

          <SC.Wrap>
            <SC.SemiTitle>{Project.semiTitle}</SC.SemiTitle>
            <SC.Paragraph>{Project.semiContent}</SC.Paragraph>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>기술스택</SC.SemiTitle>
            <SC.StackWrap>
              {Project.stacks.map((stack, idx) => (
                <SC.Stack key={idx}>{stack}</SC.Stack>
              ))}
            </SC.StackWrap>
          </SC.Wrap>

          <SC.Wrap>
            <SC.SemiTitle>진행기간</SC.SemiTitle>
            <SC.List>
              <li>Term: {Project.terms}</li>
              {Project.refactor && <li>Refactor: {Project.refactor}</li>}
            </SC.List>
          </SC.Wrap>

          {Project.team && (
            <>
              <SC.Wrap>
                <SC.SemiTitle>팀</SC.SemiTitle>
                <SC.Paragraph>{Project.team}</SC.Paragraph>
              </SC.Wrap>
              <SC.Wrap>
                <SC.SemiTitle>담당</SC.SemiTitle>
                <SC.Paragraph>{Project.role}</SC.Paragraph>
              </SC.Wrap>
            </>
          )}

          <SC.Wrap>
            <SC.SemiTitle>구현</SC.SemiTitle>
            <SC.List>
              {Project.features.map((feature, featureKey) => (
                <li key={featureKey}>{feature}</li>
              ))}
            </SC.List>
          </SC.Wrap>

          {Project.videoURL && (
            <div>
              <SC.SemiTitle>구현 영상</SC.SemiTitle>
              <SC.VideoWrap>
                <ReactPlayer
                  url={Project.videoURL}
                  playing={true}
                  controls={true}
                  width={'100%'}
                />
              </SC.VideoWrap>
            </div>
          )}

          {Project.imgDetails && (
            <div>
              <SC.SemiTitle>구현 이미지</SC.SemiTitle>
              <SC.PreviewWrap>
                {Project.imgDetails.map((detail, detailKey) => (
                  <PreviewImg
                    key={detailKey}
                    title={detail[0]}
                    thumbnail={[detail[1], detail[2]]}
                  />
                ))}
              </SC.PreviewWrap>
            </div>
          )}
        </SC.Container>
      </motion.div>
    </>
  );
}
