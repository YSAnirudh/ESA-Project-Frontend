import React, {useState} from 'react';
import {PageContainer} from './Elements/HomeElem';
import Maps from '../Components/Map';
import BackVid from '../Components/BackVideo';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';

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

  if (isHomeStart && !isHomeRide) {
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
          <HomeRide
            toggleHomeStart={toggleHomeStart}
            toggleHomeRide={toggleHomeRide}
          />
        </PageContainer>
      </>
    );
  }
}

export default Home;
