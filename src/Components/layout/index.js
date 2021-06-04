
import React, {useState} from 'react';
import   {Button,HeroContainer, HeroBg, VideoBg,  HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight}  from './HeroElements';
import video1 from '../../Videos/video1.mp4'
import {useHistory } from 'react-router-dom';

const Landing = () =>{
  const [hover,setHover] = useState(false);
  const onHover = ()=>{
    setHover(!hover)
  }
  const { push } = useHistory()
  return(
   
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src = {video1} type = 'video/mp4'>
        </VideoBg>
      </HeroBg>
      <HeroContent>
      <HeroH1>
        Welocome to Jeldi
      </HeroH1>
      <HeroP>
      RENT RIDE RETURN<br/>
      Rent a bike ,Ride on your own, Return on your Time
      </HeroP>
    <HeroBtnWrapper>
     
      <Button 
     onClick={() => push('/login')}
      onMouseEnter = {onHover} 
      onMouseLeave = {onHover}
      primary = 'true'
      dark = 'true'>
      Get started {hover ? <ArrowForward/> : <ArrowRight/>}
      </Button>
      
    </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
    
    
    
    
   
    
  );
};

export default Landing;