import React, {useState} from 'react';
import {
  Button,
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import video1 from '../../Videos/video1.mp4';
import {useHistory} from 'react-router-dom';

const AfterLogin = ({username, updateIsLogin, setIsLogin}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const {push} = useHistory();
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={video1} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome {username}</HeroH1>
        <HeroP></HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => push('/home/start')}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Book vechile {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
        <HeroBtnWrapper>
          <Button
            onClick={() => {
              localStorage.removeItem('userId');
              localStorage.setItem('isLogin', 'true');
              setIsLogin(true);
              push('/');
            }}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Log Out {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default AfterLogin;
