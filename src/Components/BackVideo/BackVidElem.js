import styled from 'styled-components';

export const BackVidContainer = styled.div`
  z-index: 0;
`;

export const BackVidBG = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: black;
`;

export const VideoBG = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
  opacity: 0.7;
`;
