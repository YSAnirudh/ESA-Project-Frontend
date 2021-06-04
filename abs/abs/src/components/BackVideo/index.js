import React from 'react';
import {BackVidBG, BackVidContainer, VideoBG} from './BackVidElem';
import Video from '../../Videos/video.mp4';

const BackVid = () => {
  return (
    <>
      <BackVidContainer>
        <BackVidBG>
          <VideoBG autoPlay loop muted src={Video} type="video/mp4" />
        </BackVidBG>
      </BackVidContainer>
    </>
  );
};

export default BackVid;
