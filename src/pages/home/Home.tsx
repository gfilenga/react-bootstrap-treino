import React from 'react';
import Video from '../../videos/video.mp4';
import { VideoBg, VideoContainer, Container, ContentContainer, ContentH1, ContentP } from './Styles';

function Home() {
  return (
    <>
      <Container>
        <VideoContainer>
          <VideoBg autoPlay loop muted >
            <source src={Video} type='video/mp4' />
          </VideoBg>
        </VideoContainer>
        <ContentContainer>
          <ContentH1>Web Developer</ContentH1>
          <ContentP>Este site foi criado com o objetivo de aplicar o que aprendi em react até o momento</ContentP>
        </ContentContainer>
      </Container>
    </>
  )
}

export default Home
