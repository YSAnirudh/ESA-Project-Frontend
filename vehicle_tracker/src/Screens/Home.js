import React, {useState} from 'react';
import {PageContainer} from './Elements/HomeElem';
//import Map from '../Components/Map';
import {homeStart, homeRide, payment} from '../Constants/RouteInfo';
import BackVid from '../Components/BackVideo';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';

function Home({path}) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };

  if (String.prototype.valueOf(path) === String.prototype.valueOf(homeStart)) {
    return (
      <>
        <PageContainer>
          <BackVid />
          <HomeStart />
          {/* <Map /> */}
        </PageContainer>
      </>
    );
  } else if (path === homeRide) {
    console.log('noob');
    return (
      <>
        <PageContainer>
          <BackVid />
          {/* <Map /> */}
        </PageContainer>
      </>
    );
  }
}

export default Home;
