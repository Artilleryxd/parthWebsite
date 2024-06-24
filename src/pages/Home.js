import React from 'react';
import Nav from '../components/Nav';
import Marquee from 'react-fast-marquee';

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
      <div className="video-container">
        <video
          width="100%" // Adjusts the video to be responsive
          loop // Video will play on loop
          autoPlay // Optional: Automatically start playing the video
          muted // Mutes the video (important for auto-playing videos)
          height="40%"
        >
          <source src="https://res.cloudinary.com/duv9rw1wg/video/upload/v1719250373/homePage/cpyhxtoihq5qsklymzag.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Home;
