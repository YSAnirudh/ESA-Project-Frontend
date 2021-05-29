import React, {useState} from 'react';
import {PageContainer} from './Elements/HomeElem';
import Maps from '../Components/Map';
import {homeStart, homeRide, payment} from '../Constants/RouteInfo';
import BackVid from '../Components/BackVideo';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';
import {MapElements} from '../Components/MapElem';

function Home({
  path,
  isHomeStart,
  isHomeRide,
  toggleHomeStart,
  toggleHomeRide,
}) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };

  if (isHomeStart && isHomeRide) {
    return (
      <PageContainer>
        {isMapOpen ? (
          <Maps isMapVisible={isMapOpen} toggleMap={toggle} />
        ) : (
          <>
            <BackVid />
            <HomeStart
              isMapVisible={isMapOpen}
              toggleMap={toggle}
              toggleHomeStart={toggleHomeStart}
              toggleHomeRide={toggleHomeRide}
            />
          </>
        )}
      </PageContainer>
    );
  } else if (!isHomeStart && isHomeRide) {
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
