import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  border: 3px solid black;
  box-sizing: border-box;
`;
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: black;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fir: cover;
  object-fit: cover;
  background: #000;
  opacity: 0.7;
`;

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  border-radius: 5px;
  width: 95%;
  box-sizing: border-box;
  margin: 10px 0 5px 0;
  padding: 10px 0 10px 0;
  @media screen and (max-width: 650px) {
    margin: 20px 0 10px 0;
    padding: 20px 0 20px 0;
  }
`;

export const TextContainer = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  color: White;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -2vh;
  margin-bottom: 2vh;
  font-size: ${(props) => props.fontSize || '1.3rem'};
  @media screen and (max-width: 650px) {
    font-size: ${(props) => props.mobFontSize || '1.7rem'};
  }
`;
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  width: 40%;
  height: 50vh;
  min-height: 200px;
  max-width: 300px;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: calc(100vh - 60px);
    max-width: 100%;
    border-radius: 0px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  min-width: 400px;
  margin-bottom: 25%;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-family: 'Merriweather', serif;
  @media screen and (max-width: 768 px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  font-family: 'Libre Baskerville', serif;
  @media screen and (max-width: 768 px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480 px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  /* margin-bottom: 20px; */
  background: ${({primary}) => (primary ? '#01BF71' : '010606')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};

  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
  }
`;
