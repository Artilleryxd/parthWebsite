import React from 'react';
import Nav from '../components/Nav';
import Marquee from 'react-fast-marquee';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div>
      <Nav />
      <Marquee pauseOnHover={true} className='bg-bluish h-12'>
        <div>
          <h1 className='text-[25px] text-white'>
            #CapTech2024- “Discover. Connect. Execute”- Monday 25th November 2024 to Thursday 28th November 2024- ICC Sydney Australia
          </h1>
        </div>
      </Marquee>
      <Carousel/>
    </div>
  );
}

export default Home;
