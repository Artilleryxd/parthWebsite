import React from 'react'
import Nav from '../components/Nav'
import Marquee from 'react-fast-marquee';


const Home = () => {
  return (
    <div>
        <Nav/>
        <Marquee pauseOnHover="true" className='bg-cyan-600 h-10'>
          <div>
            <h1 className='text-2xl text-white'> #CapTech2024- “Discover. Connect. Execute”- Monday 25th November 2024 to Thursday 28th November 2024- ICC Sydney Australia</h1>
          </div>
        </Marquee>
    </div>
  )
}

export default Home
